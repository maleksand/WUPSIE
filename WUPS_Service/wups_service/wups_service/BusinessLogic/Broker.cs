using wups_service.DataAccess;

namespace wups_service.BusinessLogic
{
    public class Broker
    {
        private readonly IConfiguration _configuration;
        public Broker(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        internal string Get(string id, string type)
        {
            return ChooseManager(type).Get(id);
        }

        internal string GetByDate(string id, string startDate, string type)
        {
            return ChooseManager(type).GetByDate(id, startDate);
        }

        internal string GetByDateRange(string id, string startDate, string endDate, string type)
        {
            return ChooseManager(type).GetByDateRange(id, startDate, endDate);
        }

        private IMeasurementManager ChooseManager(string type)
        {
            IMeasurementManager manager = type.ToLower() switch
            {
                "water" => new WaterMeasurementManager(_configuration),
                _ => throw new ArgumentException("No manager to serve following type: " + type),
            };
            return manager;
        }
    }
}
