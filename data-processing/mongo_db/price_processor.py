from . import processor
import pandas as pd
from dateutil import parser as mongo_date_parser


def insert_df(df: pd.DataFrame):
    processor.insert_df(df, "Region-prices", format_record_to_dict)

def format_record_to_dict(record: pd.Series, list: list):
    region_id = record["regionID"]
    
    region_name = record["region"]
    
    price = record["pricePrCubic"]
    
    price_doc = {
        "regionId" : region_id,
        "regionName" : region_name,
        "pricePrCubic" : price
    }
    list.append(price_doc)