from typing import Callable
from . import get_mongodb
import pandas as pd
from pymongo import collection


db = get_mongodb.get_database()


def insert_df(df: pd.DataFrame, collectionName: str, formatter: Callable[[pd.Series, list], None]):
    collection = recreate_collection(collectionName)
    
    items = []
    df.apply(lambda record: formatter(record, items), axis=1)
    
    collection.insert_many(items)
    

def recreate_collection(collectionName: str) -> collection.Collection:
    if collectionName in db.list_collection_names():
        db.drop_collection(collectionName)
    
    db.create_collection(collectionName)
    return db.get_collection(collectionName)