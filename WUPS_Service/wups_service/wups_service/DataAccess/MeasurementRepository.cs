using System.Text.Json;
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
        /// <returns>historical data related to the id</returns>
        public string Get(string id)
        {
            string json = null;

            try
            {
                MongoClient dbClient = new("mongodb+srv://mongoadmin:secret1234@cluster0.9w8cr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

                var database = dbClient.GetDatabase("WUPS");
                var collection = database.GetCollection<BsonDocument>("measurements");


                // creating a filter to use to find a specific ID in the collection
                var filter = Builders<BsonDocument>.Filter.Eq("_id", id);

                //Finding the first document (testing read )
                json = collection.Find(filter).FirstOrDefault().ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict});
                

                

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return json;

        }

        public string Get(string id, string parameters)
        {
            throw new NotImplementedException();
        }
    }
}
