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

        public string Get(string id, ManagerTypes managerType)
        {
            string result;
            try
            {
                result = ChooseManager(managerType).Get(id); // If you can't find a normal manager...
            }
            catch (NoManagerFoundException)
            {
                result = ChoosemeasurementManager(managerType).Get(id); // ...try looking for a measurement manager.
            }
            return result;
        }

        public string GetAll(string id, ManagerTypes managerType)
        {
            string result;
            try
            {
                result = ChooseManager(managerType).GetAll(id); // If you can't find a normal manager...
            }
            catch (NoManagerFoundException)
            {
                result = ChoosemeasurementManager(managerType).GetAll(id); // ...try looking for a measurement manager.
            }
            return result;
        }

        public string GetByDate(string id, string startDate, ManagerTypes managerType)
        {
            return ChoosemeasurementManager(managerType).GetByDate(id, startDate);
        }

        public string GetByDateRange(string id, string startDate, string endDate, ManagerTypes managerType)
        {
            return ChoosemeasurementManager(managerType).GetByDateRange(id, startDate, endDate);
        }
        
        private IManager ChooseManager(ManagerTypes managerType)
        {
            IManager manager = managerType switch
            {
                ManagerTypes.Device => new DeviceManager(_configuration),
                ManagerTypes.Household => new HouseholdManager(_configuration),
                _ => throw new NoManagerFoundException("No manager to serve following managerType: " + managerType),
            };
            return manager;
        }

        private IMeasurementManager ChoosemeasurementManager(ManagerTypes managerType)
        {
            IMeasurementManager manager = managerType switch
            {
                ManagerTypes.WaterMeasurement => new WaterMeasurementManager(_configuration),
                _ => throw new NoManagerFoundException("No manager to serve following managerType: " + managerType),
            };
            return manager;
        }
    }
}
