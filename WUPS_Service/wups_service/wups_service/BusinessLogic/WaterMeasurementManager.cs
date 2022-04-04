using wups_service.DataAccess;
using wups_service.Model;
using System.Text.Json;

namespace wups_service.BusinessLogic
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
    }
}
