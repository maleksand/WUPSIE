import pandas as pd

def get_measurements_df():
    df = pd.read_csv(f"csv-data/measurement.csv")
    format_measurements_df(df)
    return df

def get_households_df():
    households_df = pd.read_csv(f"csv-data/household.csv")
    devices_df = pd.read_csv(f"csv-data/device.csv")
    df = merge_devices_into_households(devices_df, households_df)
    return df

def format_measurements_df(df):
    df['value'] = df['value'].apply(lambda x: x.split(' ')[0]) # removes the 'm3' from the value column
    df['value'] = pd.to_numeric(df['value']) # converts values from string to float64
    df['measurement'] = pd.to_datetime(df['measurement']) # parse string to datetime
    df = df.sort_values(by="measurement") # sort by date    

def merge_devices_into_households(devices_df: pd.DataFrame, households_df: pd.DataFrame) -> pd.DataFrame:
    household_devices = {}
    for household_id in households_df["householdID"]:
        the_devices_records = devices_df.query(f'householdID == "{household_id}"')
        household_devices[household_id] = the_devices_records["deviceID"].values.tolist()
    
    households_df["devices"] = households_df["householdID"].map(household_devices)
        
    return households_df