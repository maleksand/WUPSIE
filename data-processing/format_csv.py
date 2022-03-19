import pandas as pd
import get_mongodb
from dateutil import parser as mongo_date_parser
import time

def get_measurements_df():
    df = pd.read_csv(r"csv-data\measurement.csv")
    format_csv_df(df)
    return df

def format_csv_df(df):
    df['value'] = df['value'].apply(lambda x: x.split(' ')[0]) # removes the 'm3' from the value column
    df['value'] = pd.to_numeric(df['value']) # converts values from string to float64
    df['measurement'] = pd.to_datetime(df['measurement']) # parse string to datetime
    df = df.sort_values(by="measurement") # sort by date


def insert_into_collection(documents, db_collection):
    db_collection.insert_many(documents)


def record_to_water_measuremenst_document(measurements, record):
    device_id = record["deviceID"]
    
    # convert datetime to string by iso format
    iso_date = mongo_date_parser.parse(record["measurement"].strftime('%Y-%m-%dT%H:%M:%S.%f%z')) 
    meter_type = record["meterType"]
    value = record["value"]
    
    # find the dict in devices which have matching id
    measurement = {
        "metadata" : {"deviceId" : device_id, "meterType" : meter_type},
        "timestamp" : iso_date,
        "measurement" : value
    }
    measurements.append(measurement)

    return measurements


def add_record_to_measurements_documents(devices, record):
    device_id = record["deviceID"]
    
    # convert datetime to string by iso format
    iso_date = mongo_date_parser.parse(record["measurement"].strftime('%Y-%m-%dT%H:%M:%S.%f%z')) 
    value = record["value"]
    
    # find the dict in devices which have matching id
    device = next(x for x in devices if x["_id"] == device_id) 
    measurement = {
        "datetime": iso_date,
        "measurement" : value
    }
    device["measurements"].append(measurement)
    
    return devices


def insert_measurements_collection(db, docs):
    print("dropping measurements collection...", end="", flush=True)
    db["measurements"].drop()
    print("done")

    print("dropping measurements collection...", end="", flush=True)
    db_collection = db["measurements"] #creates collection
    print("done")

    print("uploading measurements collection...", end="", flush=True)
    insert_into_collection(docs, db_collection)
    print("done")



def insert_water_measuremnts_collection(db, docs):
    print("dropping water measurements collection...", end="", flush=True)
    db.drop_collection("Water-measurements")
    print("done")

    print("creating water measurements collection...", end="", flush=True)
    db_collection = db.create_collection("Water-measurements", 
        timeseries={
            "timeField" : "timestamp",
            "metaField" : "metadata" 
        }
    ) #creates collection
    print("done")

    print("uploading water measurements collection...", end="", flush=True)
    insert_into_collection(docs, db_collection)
    print("done")


def df_to_documents(df):
    measurements_docs = []
    for device_id in pd.unique(df["deviceID"]):
        # gets the first instance of device and gets its metertype from there. Item returns value without index.
        meterType = df[df["deviceID"] == device_id].head(1)["meterType"].item() 
        measurements_docs.append({
            "_id" : device_id,
            "meterType" : meterType,
            "measurements" : []
            })

    water_measuremnts_docs = []

    print("processing measurements docs...", end="", flush=True)
    df.apply(lambda record: add_record_to_measurements_documents(measurements_docs, record), axis=1)
    print("done")

    print("processing water measurements docs...", end="", flush=True)
    df.apply(lambda record: record_to_water_measuremenst_document(water_measuremnts_docs, record), axis=1)
    print("done")

    return measurements_docs, water_measuremnts_docs

if __name__ == "__main__":
    start_time = time.time()
    
    db = get_mongodb.get_database("local")
    df = get_measurements_df()

    measurements_docs, water_measuremnts_docs = df_to_documents(df)
    
    insert_water_measuremnts_collection(db, water_measuremnts_docs)
    insert_measurements_collection(db, measurements_docs)
    
    time_used = time.time() - start_time
    print(f"This took {time_used:.2f} seconds!")
    