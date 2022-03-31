import os

# this script is copied from:
# https://www.mongodb.com/languages/python
def get_database(enviroment: str=""):
    # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
    from pymongo import MongoClient

    try:
        enviroment = enviroment if enviroment != "" else os.environ["PYTHON_ENV"]
    except KeyError as err:
        print(err)

        

    if(enviroment == "docker"):
        client = MongoClient(host="mongodb:27017", username="mongoadmin", password="secret") 
    elif(enviroment == "local"):
        client = MongoClient(port=27017, username="mongoadmin", password="secret") 
    elif(enviroment == "remote" or enviroment == ""):
        client = MongoClient("mongodb+srv://mongoadmin:secret1234@cluster0.9w8cr.mongodb.net/test")
    # Create the database for our example (we will use the same database throughout the tutorial
    return client['WUPS']