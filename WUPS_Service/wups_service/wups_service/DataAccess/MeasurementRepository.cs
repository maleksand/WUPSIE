using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Driver;
using System.Globalization;

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
            string json = "";

            try
            {
                var collection = GetMongoCollection("WUPS", "Water-measurements");

                var filter = Builders<BsonDocument>.Filter.Eq("metadata.deviceId", id);

                //Finding the first document (testing read )
                json = collection.Find(filter).ToList().ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return json;

        }
        /// <summary>
        /// Find the measurements for the the wanted date
        /// </summary>
        /// <param name="id">DevicdeId</param>
        /// <param name="date">starting date point YYYY-MM-DDT00:00:00</param>
        /// <returns> history of the date + 24 hours </returns>
        public string GetByDate(string id, string date)
        {
            string json = "";

            try
            {
                var collection = GetMongoCollection("WUPS", "Water-measurements");

                var stringDate = date;
                DateTime dateFilter = DateTime.Parse(stringDate, CultureInfo.InvariantCulture, DateTimeStyles.AssumeUniversal);
                // creating a filter to  find all documents with the specific ID in the collection
                var builder = Builders<BsonDocument>.Filter;
                var filter = builder.And(builder.Eq("metadata.deviceId", id), builder.Gt("timestamp", dateFilter), builder.Lt("timestamp", dateFilter.AddDays(1)));
                 
                //Finding the first document (testing read )
                json = collection.Find(filter).ToList().ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict });

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return json;

        }

        public string GetByDateRange(string id, string startDate, string endDate)
        {
            string json = "";

            try
            {
                var collection = GetMongoCollection("WUPS", "Water-measurements");

                var startString = startDate;
                var endString = endDate;

                DateTime startFilter = DateTime.Parse(startString, CultureInfo.InvariantCulture,DateTimeStyles.AssumeUniversal);
                DateTime endFilter = DateTime.Parse(endString, CultureInfo.InvariantCulture, DateTimeStyles.AssumeUniversal);
                
                var builder = Builders<BsonDocument>.Filter;
                var filter = builder.And(builder.Eq("metadata.deviceId", id), builder.Gt("timestamp", startFilter), builder.Lt("timestamp", endFilter));

                json = collection.Find(filter).ToList().ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict });


            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return json;
        }
        /// <summary>
        /// Creating a connection to the mongoDB
        /// </summary>
        /// <param name="databaseName"></param>
        /// <param name="collectionName"></param>
        /// <returns></returns>
        private IMongoCollection<BsonDocument> GetMongoCollection(string databaseName, string collectionName)
        {
            //TODO Get the connectionstring into appsettings.json

            // remote
            MongoUrl mongoUrl = new("mongodb+srv://mongoadmin:secret1234@cluster0.9w8cr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

            // local
            //MongoUrl mongoUrl = new("mongodb://mongoadmin:secret@localhost:27017/?authSource=admin");

            // docker compose
            //MongoUrl mongoUrl = new("mongodb://mongoadmin:secret@mongodb:27017/?authSource=admin");

            MongoClient dbClient = new(mongoUrl);

            var database = dbClient.GetDatabase(databaseName);
            var collection = database.GetCollection<BsonDocument>(collectionName);

            return collection;
        }
    }
}
