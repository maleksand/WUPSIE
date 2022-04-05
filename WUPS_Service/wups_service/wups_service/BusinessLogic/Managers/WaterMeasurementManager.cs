using wups_service.DataAccess;
using wups_service.Model;
using System.Text.Json;

namespace wups_service.BusinessLogic.Managers
{
    public class WaterMeasurementManager : IMeasurementManager
    {
        private readonly IMeasurementRepository<List<WaterMeasurement>> _waterMeasurementRepository;
        private JsonSerializerOptions _jsonOptions { get; set; }

        public WaterMeasurementManager(IConfiguration configuration)
        {
            _waterMeasurementRepository = new WaterMeasurementRepository(configuration);
            _jsonOptions = new JsonSerializerOptions(JsonSerializerDefaults.Web);

        }

        public string Get(string id)
        {
            WaterMeasurement waterMeasurement = _waterMeasurementRepository.Get(id).Single();
            return JsonSerializer.Serialize(waterMeasurement, _jsonOptions);
        }

        public string GetAll(string id)
        {
            List<WaterMeasurement> waterMeasurements = _waterMeasurementRepository.GetAll(id);
            return JsonSerializer.Serialize(waterMeasurements, _jsonOptions);
        }

        public string GetByDate(string id, string date)
        {
            List<WaterMeasurement> waterMeasurements = _waterMeasurementRepository.GetByDate(id, date);
            return JsonSerializer.Serialize(waterMeasurements, _jsonOptions);
        }

        public string GetByDateRange(string id, string startDate, string endDate)
        {
            List<WaterMeasurement> waterMeasurements = _waterMeasurementRepository.GetByDateRange(id, startDate, endDate);
            return JsonSerializer.Serialize(waterMeasurements, _jsonOptions);
        }

        public string ResolveRequest(Dictionary<string, string> queries)
        {
            string startDate = string.Empty;
            string endDate = string.Empty;
            string deviceId = string.Empty;

            foreach (KeyValuePair<string, string> keyValuePair in queries)
            {
                switch (keyValuePair.Key)
                {
                    case "startDate":
                        startDate = keyValuePair.Value;
                        break;
                    case "endDate":
                        endDate = keyValuePair.Value;
                        break;
                    case "deviceId":
                        deviceId = keyValuePair.Value;
                        break;
                }
            }
            
            
            string measurements;
            if (!String.IsNullOrEmpty(startDate))
            {
                if (!String.IsNullOrEmpty(endDate))
                {
                    // if both startDate and endDate is defined
                    measurements = GetByDateRange(deviceId, startDate, endDate);
                }
                else
                {
                    // if only startdate is defined
                    measurements = GetByDate(deviceId, startDate);
                }
            }
            else
            {
                measurements = GetAll(deviceId);
            }

            return measurements;
        }
    }
}
