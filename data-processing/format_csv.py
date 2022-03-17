import pandas as pd
import get_mongodb
from dateutil import parser as mongo_date_parser
import time

def get_measurements_df():
    df = pd.read_csv(r"csv-data\measurement.csv")
    return df

def format_csv_df(df):
    df['value'] = df['value'].apply(lambda x: x.split(' ')[0]) # removes the 'm3' from the value column
    df['value'] = pd.to_numeric(df['value']) # converts values from string to float64
    df['measurement'] = pd.to_datetime(df['measurement']) # parse string to datetime
    df = df.sort_values(by="measurement") # sort by date
    


def csv_df_to_documents(df):
    # creating devices
    devices = []
    for device_id in pd.unique(df["deviceID"]):
        # gets the first instance of device and gets its metertype from there. Item returns value without index.
        meterType = df[df["deviceID"] == device_id].head(1)["meterType"].item() 
        devices.append({
            "_id" : device_id,
            "meterType" : meterType,
            "measurements" : []
            })
    
    # adding each measurement to apropiate device
    df_measurements = df.to_dict("records") # converts each row to a dict(pythons json like thing)
    for i, record in enumerate(df_measurements):
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
        if(i % 10000 == 0):
            print("row:" + str(i))
    
    return devices

def drop_current_collection(db_collection):
    db_collection.drop()


def insert_into_collection(documents, db_collection):
    db_collection.insert_many(documents)

if __name__ == "__main__":
    start_time = time.time()
    
    db = get_mongodb.get_database("remote")
    db_collection = db["measurements"] #creates or refenrces collection
    
    csv_df = get_measurements_df()
    format_csv_df(csv_df)
    
    documents = csv_df_to_documents(csv_df)
    drop_current_collection(db_collection)
    insert_into_collection(documents, db_collection)
    
    time_used = time.time() - start_time
    print(f"This took {time_used:.2f} seconds!")

