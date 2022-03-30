from dateutil import parser as mongo_date_parser
from . import get_mongodb
import pandas as pd
from pymongo import collection


db = get_mongodb.get_database("remote")


def insert_df(df: pd.DataFrame):
    collection = recreate_collection()
    
    measurements = []
    df.apply(lambda record: format_record_to_dict(record, measurements), axis=1)
    
    collection.insert_many(measurements)
    

def recreate_collection() -> collection.Collection:
    if "Water-measurements" in db.list_collection_names():
        db.drop_collection("Water-measurements")
    
    db.create_collection("Water-measurements")
    return db.get_collection("Water-measurements")


def format_record_to_dict(record: pd.Series, list: list):
    device_id = record["deviceID"]
    
    # convert datetime to string by iso format
    iso_date = mongo_date_parser.parse(record["measurement"].strftime('%Y-%m-%dT%H:%M:%S.%f%z')) 
    meter_type = record["meterType"]
    value = record["value"]
    
    measurement = {
        "metadata" : {"deviceId" : device_id, "meterType" : meter_type},
        "timestamp" : iso_date,
        "measurement" : value
    }
    list.append(measurement)