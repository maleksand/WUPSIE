using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Driver;

namespace wups_service.DataAccess
{
    public class MeasurementRepository : IRepository<string>
    {
        /// <summary>
        /// Get the full historical measurement data
        /// </summary>
        /// <param name="id"> the device id</param>
        /// <returns>historical data related to the id as a json document. Null if nothing was found</returns>
        public string Get(string id)
        {
            string json = null;

            try
            {
                MongoClient dbClient = new("mongodb+srv://mongoadmin:secret1234@cluster0.9w8cr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

                var database = dbClient.GetDatabase("WUPS");
                var collection = database.GetCollection<BsonDocument>("Water-measurements");

                // creating filter to use to find a specific ID in the collection
                    
                var filter = Builders<BsonDocument>.Filter.Eq("metadata.deviceId", id);

                //Finding the first document (testing read )
                json = collection.Find(filter).ToList().ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict});
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return json;

        }

        public string Get(string id, string parameters)
        {
            string json = null;

            try
            {
                MongoClient dbClient = new("mongodb+srv://mongoadmin:secret1234@cluster0.9w8cr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

                var database = dbClient.GetDatabase("WUPS");
                var collection = database.GetCollection<BsonDocument>("Water-measurements");

                //TODO make date period filter
                // creating a filter to  find all documents with the specific ID in the collection
                var builder = Builders<BsonDocument>.Filter;
                var filter = builder.And(builder.Eq("metadata.deviceId", id), builder.Gt("timestamp", "2019-11-02T00:00:00.000+00:00"));

                //Finding the first document (testing read )
                json = collection.Find(filter).ToList().ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict });

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return json;

        }
    }
}
