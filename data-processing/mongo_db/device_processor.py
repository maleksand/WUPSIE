import pandas as pd
from . import processor


def insert_df(df: pd.DataFrame):
    processor.insert_df(df, "Devices", format_record_to_dict)


def format_record_to_dict(record: pd.Series, list: list):
    device_id = record["deviceID"]
    household_id = record["householdID"]
    
    household = {
        "_id": device_id,
        "household_id": household_id
    }
    list.append(household)