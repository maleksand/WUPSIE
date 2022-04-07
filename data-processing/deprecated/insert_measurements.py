import imp
import pandas as pd
import get_mongodb
import formatter_measurement
import time


def get_measurements_df():
    df = pd.read_csv("csv-data/measurement.csv")
    format_csv_df(df)
    return df

def format_csv_df(df):
    df['value'] = df['value'].apply(lambda x: x.split(' ')[0]) # removes the 'm3' from the value column
    df['value'] = pd.to_numeric(df['value']) # converts values from string to float64
    df['measurement'] = pd.to_datetime(df['measurement']) # parse string to datetime
    df = df.sort_values(by="measurement") # sort by date


def insert_into_collection(documents, db_collection):
    db_collection.insert_many(documents)


def insert_measurements_collection(db, docs):
    print("dropping measurements collection...", end="", flush=True)
    db["measurements"].drop()
    print("done")

    print("dropping measurements collection...", end="", flush=True)
    db_collection = db["measurements"] #creates collection
    print("done")

    print("uploading measurements collection...", end="", flush=True)
    insert_into_collection(docs, db_collection)
    print("done")



def insert_water_measuremnts_collection(db, docs):
    print("dropping water measurements collection...", end="", flush=True)
    db.drop_collection("Water-measurements")
    print("done")

    print("creating water measurements collection...", end="", flush=True)
    db_collection = db.create_collection("Water-measurements", 
        timeseries={
            "timeField" : "timestamp",
            "metaField" : "metadata" 
        }
    ) #creates collection
    print("done")

    print("uploading water measurements collection...", end="", flush=True)
    insert_into_collection(docs, db_collection)
    print("done")


if __name__ == "__main__":
    start_time = time.time()
    
    db = get_mongodb.get_database("remote")
    df = get_measurements_df()

    measurements_docs, water_measuremnts_docs = formatter_measurement.df_to_documents(df)
    
    insert_water_measuremnts_collection(db, water_measuremnts_docs)
    insert_measurements_collection(db, measurements_docs)
    
    time_used = time.time() - start_time
    print(f"This took {time_used:.2f} seconds!")
    