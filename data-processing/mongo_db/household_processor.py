import pandas as pd
from . import processor


def insert_df(df: pd.DataFrame):
    processor.insert_df(df, "Households", format_record_to_dict)


def format_record_to_dict(record: pd.Series, list: list):
    household_id = record["householdID"]
    user_id = record["userID"]
    devices = record["devices"]
    
    
    household = {
        "_id": household_id,
        "userId": user_id,
        "devices": devices
    }
    list.append(household)