import pandas as pd

def get_measurements_df():
    df = pd.read_csv(f"csv-data/measurement.csv")
    format_measurements_df(df)
    return df

def format_measurements_df(df):
    df['value'] = df['value'].apply(lambda x: x.split(' ')[0]) # removes the 'm3' from the value column
    df['value'] = pd.to_numeric(df['value']) # converts values from string to float64
    df['measurement'] = pd.to_datetime(df['measurement']) # parse string to datetime
    df = df.sort_values(by="measurement") # sort by date