using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System.Globalization;
using wups_service.Model;

namespace wups_service.DataAccess
{
    public class MeasurementRepository : IRepository<List<Measurement>>
    {
        /// <summary>
        /// Get the full historical Measurement data
        /// </summary>
        /// <param name="id"> the device id</param>
        /// <returns>historical data related to the id as a json document. Null if nothing was found</returns>
        public List<Measurement> Get(string id)
        {
            List<Measurement> measurements = new List<Measurement>();
        
            var collection = GetMongoCollection("WUPS", "Water-measurements");

            measurements = collection.Find(m => m.Metadata.DeviceId == id).ToList();
            
            return measurements;

        }
        /// <summary>
        /// Find the Measurements for the the wanted date
        /// </summary>
        /// <param name="id">DevicdeId</param>
        /// <param name="date">starting date point YYYY-MM-DDT00:00:00</param>
        /// <returns> history of the date + 1 day </returns>
        public List<Measurement> GetByDate(string id, string date)
        {
            List<Measurement> measurements = new List<Measurement>();

            var collection = GetMongoCollection("WUPS", "Water-measurements");

            var stringDate = date;
            DateTime dateFilter = DateTime.Parse(stringDate, CultureInfo.InvariantCulture, DateTimeStyles.AssumeUniversal);

            measurements = collection.Find(m => m.Metadata.DeviceId == id && m.Timestamp >= dateFilter && m.Timestamp < dateFilter.AddDays(1)).ToList();

            return measurements;

        }

        public List<Measurement> GetByDateRange(string id, string startDate, string endDate)
        {
            List<Measurement> measurements = new List<Measurement>();

            var collection = GetMongoCollection("WUPS", "Water-measurements");

            var startString = startDate;
            var endString = endDate;

            // Makes sure that different dateformats are passed to ISO date (ie. 2000-10-01 becomes 2000-10-01T00:00:00:000 )
            DateTime startFilter = DateTime.Parse(startString, CultureInfo.InvariantCulture,DateTimeStyles.AssumeUniversal);
            DateTime endFilter = DateTime.Parse(endString, CultureInfo.InvariantCulture, DateTimeStyles.AssumeUniversal);
                
            measurements = collection.Find(m => m.Metadata.DeviceId == id && m.Timestamp >= startFilter && m.Timestamp < endFilter).ToList();

            return measurements;
        }
        /// <summary>
        /// Creating a connection to the mongoDB
        /// </summary>
        /// <param name="databaseName"></param>
        /// <param name="collectionName"></param>
        /// <returns></returns>
        private IMongoCollection<Measurement> GetMongoCollection(string databaseName, string collectionName)
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
            var collection = database.GetCollection<Measurement>(collectionName);

            return collection;
        }


    }
}
