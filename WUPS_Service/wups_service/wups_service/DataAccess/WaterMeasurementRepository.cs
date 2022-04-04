using MongoDB.Driver;
using System.Globalization;
using wups_service.Model;

namespace wups_service.DataAccess
{
    public class WaterMeasurementRepository : IMeasurementRepository<List<WaterMeasurement>>
    {
        private Database _database;

        public WaterMeasurementRepository(IConfiguration config)
        {

            _database = new Database(config);
        }
        
        public List<WaterMeasurement> Get(string measurementId)
        {
            List<WaterMeasurement> measurements = new List<WaterMeasurement>();

            var collection = _database.GetMongoCollection<WaterMeasurement>("Water-measurements");

            measurements = collection.Find(m => m.Id == measurementId).ToList();

            return measurements;
        }

        public List<WaterMeasurement> GetAll(string deviceId)
        {
            List<WaterMeasurement> measurements = new List<WaterMeasurement>();

            var collection = _database.GetMongoCollection<WaterMeasurement>("Water-measurements");

            measurements = collection.Find(m => m.Metadata.DeviceId == deviceId).ToList();

            return measurements;
        }


        /// <summary>
        /// Find the Measurements for the the wanted date
        /// </summary>
        /// <param name="deviceId">DevicdeId</param>
        /// <param name="date">starting date point YYYY-MM-DDT00:00:00</param>
        /// <returns> history of the date + 1 day </returns>
        public List<WaterMeasurement> GetByDate(string deviceId, string date)
        {
            List<WaterMeasurement> measurements = new List<WaterMeasurement>();

            var collection = _database.GetMongoCollection<WaterMeasurement>("Water-measurements");

            var stringDate = date;
            DateTime dateFilter = DateTime.Parse(stringDate, CultureInfo.InvariantCulture, DateTimeStyles.AssumeUniversal);

            measurements = collection.Find(m => m.Metadata.DeviceId == deviceId && m.Timestamp >= dateFilter && m.Timestamp < dateFilter.AddDays(1)).ToList();

            return measurements;

        }

        public List<WaterMeasurement> GetByDateRange(string deviceId, string startDate, string endDate)
        {
            List<WaterMeasurement> measurements = new List<WaterMeasurement>();

            var collection = _database.GetMongoCollection<WaterMeasurement>("Water-measurements");

            var startString = startDate;
            var endString = endDate;

            // Makes sure that different dateformats are passed to ISO date (ie. 2000-10-01 becomes 2000-10-01T00:00:00:000 )
            DateTime startFilter = DateTime.Parse(startString, CultureInfo.InvariantCulture,DateTimeStyles.AssumeUniversal);
            DateTime endFilter = DateTime.Parse(endString, CultureInfo.InvariantCulture, DateTimeStyles.AssumeUniversal);
                
            measurements = collection.Find(m => m.Metadata.DeviceId == deviceId && m.Timestamp >= startFilter && m.Timestamp < endFilter).ToList();

            return measurements;
        }
    }
}
