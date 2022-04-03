import pandas as pd
from . import processor


def insert_df(df: pd.DataFrame):
    processor.insert_df(df, "Devices", format_record_to_dict)


def format_record_to_dict(record: pd.Series, list: list):
    device_id = record["deviceID"]
    device_type = "waterMeasurement"
    
    
    device = {
        "_id": device_id,
        "deviceType": device_type
    }
    list.append(device)