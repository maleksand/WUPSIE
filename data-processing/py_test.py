import time
from pymongo import MongoClient
import pymongo

def run():
     myclient = pymongo.MongoClient("mongodb+srv://mongoadmin:secret1234@cluster0.9w8cr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
     mydb = myclient["WUPS"]
     mycol = mydb["measurements"]
     mydict = { "name": "John", "address": "Highway 37" }
     x = mycol.insert_one(mydict)

if __name__ == "__main__":
    seconds = time.time()
    run()
    print(time.time() - seconds)
    input()