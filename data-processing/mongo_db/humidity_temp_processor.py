import pandas as pd
from . import processor
from dateutil import parser as mongo_date_parser

def insert_df(df: pd.DataFrame):
    processor.insert_df(df, "HumidityAndTemperature", format_record_to_dict)


def format_record_to_dict(record: pd.Series, list: list):
    device_id = "ad12ss24"

    iso_data = mongo_date_parser.parse(record["date"].strftime('%Y-%m-%d %H:%M:%S'))
    meter_type = 'HumidityAndTemperature'
    T_Kitchen = record['T1']
    H_Kitchen = record ['RH_1']
    T_Livingroom = record['T2']
    H_Livingroom = record ['RH_2']
    T_Bathroom = record['T5']
    H_Bathroom = record ['RH_9']
    T_Bedroom = record['T9']
    H_Bedroom = record ['RH_9']
    
    time_series_measurement = {
        "metadata" : {"deviceId" : device_id, "meter_type" : meter_type},
        "timestamp" : iso_data,
        "T_Kit" : T_Kitchen,
        "H_Kit" : H_Kitchen,
        "T_Liv" : T_Livingroom,
        "H_Liv" : H_Livingroom,
        "T_Bat" : T_Bathroom,
        "H_Bat" : H_Bathroom,
        "T_Bed" : T_Bedroom,
        "H_Bed" : H_Bedroom
    }
    list.append(time_series_measurement)


