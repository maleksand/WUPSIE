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
        
        public IManager GetManager(ManagerTypes managerType)
        {
            IManager manager = managerType switch
            {
                ManagerTypes.Device => new DeviceManager(_configuration),
                ManagerTypes.Household => new HouseholdManager(_configuration),
                _ => throw new NoManagerFoundException("No manager to serve following managerType: " + managerType),
            };
            return manager;
        }

        public IMeasurementManager GetMeasurementManager(ManagerTypes managerType)
        {
            IMeasurementManager manager = managerType switch
            {
                ManagerTypes.WaterMeasurement => new WaterMeasurementManager(_configuration),
                _ => throw new NoManagerFoundException("No measurement manager to serve following managerType: " + managerType),
            };
            return manager;
        }
    }
}
