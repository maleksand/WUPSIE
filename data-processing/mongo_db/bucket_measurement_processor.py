from . import processor
import pandas as pd
from dateutil import parser as mongo_date_parser

def insert_df(df: pd.DataFrame):
    processor.insert_df(df, "Water-measurements-bucket", format_record_to_dict)

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