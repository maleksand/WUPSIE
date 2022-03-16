import pandas as pd
import get_mongodb
from dateutil import parser as mongo_date_parser
import time

def get_measurements_df():
    df = pd.read_csv(r"data-processing\csv-data\measurement.csv")
    return df

def format_csv_df(df):
    df['value'] = df['value'].apply(lambda x: x.split(' ')[0]) # removes the 'm3' from the value column
    df['value'] = pd.to_numeric(df['value']) # converts values from string to float64
    df['measurement'] = df['measurement'].apply(lambda x: x[:-1] + ".000Z")
    


def csv_df_to_collection(db, df):
    db_measurements = db["measurements"] #creates collection

    # creating devices
    devices = []
    for device_id in pd.unique(df["deviceID"]):
        devices.append({
            "_id" : device_id,
            "measurements" : []
            })
    
    # adding each measurement to apropiate device
    df_measurements = df.to_dict("records") # converts each row to a dict(pythons json like thing)
    for i, record in enumerate(df_measurements):
        device_id = record["deviceID"]
        iso_date = mongo_date_parser.parse(record["measurement"])
        value = record["value"]
        device = next(x for x in devices if x["_id"] == device_id) # find the dict in devices which have matching id
        measurement = {
            "datetime": iso_date,
            "measurement" : value
        }
        device["measurements"].append(measurement)
        print("row:" + str(i))
    
    # insert in database
    db_measurements.insert_many(devices)

if __name__ == "__main__":
    start_time = time.time()
    db = get_mongodb.get_database()
    csv_df = get_measurements_df()
    format_csv_df(csv_df)
    csv_df_to_collection(db, csv_df)
    print("This took " + time.time() - start_time + " seconds!")

