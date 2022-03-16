# this script is copied from:
# https://www.mongodb.com/languages/python
def get_database():
    from pymongo import MongoClient
    import pymongo

    # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
    from pymongo import MongoClient
    #For Local
    #client = MongoClient(port=27017, username="mongoadmin", password="secret") #if localhost, then just define port
    # For remote
    client = MongoClient("mongodb+srv://mongoadmin:secret1234@cluster0.9w8cr.mongodb.net/test") 
    # Create the database for our example (we will use the same database throughout the tutorial
    return client['WUPS']

# This is added so that many files can reuse the function get_database()
if __name__ == "__main__":    
    
    # Get the database
    db = get_database()