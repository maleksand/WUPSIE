import pandas as pd
from dateutil import parser as mongo_date_parser

def record_to_water_measuremenst_document(docs, record):
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
    docs.append(measurement)

    return docs


def add_record_to_measurements_documents(docs, record):
    device_id = record["deviceID"]
    
    # convert datetime to string by iso format
    iso_date = mongo_date_parser.parse(record["measurement"].strftime('%Y-%m-%dT%H:%M:%S.%f%z')) 
    value = record["value"]
    
    # find the dict in devices which have matching id
    device = next(x for x in docs if x["_id"] == device_id) 
    measurement = {
        "datetime": iso_date,
        "measurement" : value
    }
    device["measurements"].append(measurement)
    
    return docs

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

    print("Processing begun")
    print("processing measurements docs...", end="", flush=True)
    df.apply(lambda record: add_record_to_measurements_documents(measurements_docs, record), axis=1)
    print("done")

    print("processing water measurements docs...", end="", flush=True)
    df.apply(lambda record: record_to_water_measuremenst_document(water_measuremnts_docs, record), axis=1)
    print("done")

    return measurements_docs, water_measuremnts_docs