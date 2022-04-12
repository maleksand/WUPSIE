using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Text.Json;
using wups_service.DataAccess;
using Xunit;

namespace wups_service_test
{
    public class MeasurementTest
    {
        [Fact]
        public void TestingDB()
        {
            MongoClient dbClient = new("mongodb+srv://mongoadmin:secret1234@cluster0.9w8cr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

            var database = dbClient.GetDatabase("WUPS");
            var collection = database.GetCollection<BsonDocument>("measurements");


            // creating a filter to use to find a specific ID in the collection
            var filter = Builders<BsonDocument>.Filter.Eq("_id", "052FF1D27A7B1AF8");


            //Finding the first document (testing read )
            var firstDoc = collection.Find(new BsonDocument()).FirstOrDefault();
            Console.WriteLine(firstDoc.ToString());
            

            //Using filter to find the document assigned to the _id (testing lookup)
            var secondDoc = collection.Find(filter).FirstOrDefault();
            Console.WriteLine(secondDoc.ToString());


        }
    }
}