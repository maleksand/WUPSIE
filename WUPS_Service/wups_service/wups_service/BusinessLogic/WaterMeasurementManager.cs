using wups_service.DataAccess;
using wups_service.Model;
using System.Text.Json;

namespace wups_service.BusinessLogic
{
    public class WaterMeasurementManager : IMeasurementManager
    {
        private readonly IMeasurementRepository<List<WaterMeasurement>> _waterMeasurementRepository;
        public WaterMeasurementManager(IConfiguration configuration)
        {
            _waterMeasurementRepository = new WaterMeasurementRepository(configuration);
        }

        public string Get(string id)
        {
            List<WaterMeasurement> waterMeasurements = _waterMeasurementRepository.Get(id);
            return JsonSerializer.Serialize(waterMeasurements);
        }

        public string GetByDate(string id, string date)
        {
            List<WaterMeasurement> waterMeasurements = _waterMeasurementRepository.GetByDate(id, date);
            return JsonSerializer.Serialize(waterMeasurements);
        }

        public string GetByDateRange(string id, string startDate, string endDate)
        {
            List<WaterMeasurement> waterMeasurements = _waterMeasurementRepository.GetByDateRange(id, startDate, endDate);
            return JsonSerializer.Serialize(waterMeasurements);
        }
    }
}
