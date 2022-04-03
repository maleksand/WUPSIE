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

        public string GetOne(string id, ManagerTypes managerType)
        {
            string result;
            try
            {
                result = ChooseManager(managerType).GetOne(id); // If you can't find a normal manager...
            }
            catch (TypeAccessException)
            {
                result = ChoosemeasurementManager(managerType).GetOne(id); // ...try looking for a measurement manager.
            }
            return result;
        }

        public string GetMany(string id, ManagerTypes managerType)
        {
            string result;
            try
            {
                result = ChooseManager(managerType).GetMany(id);
            } catch (TypeAccessException)
            {
                result = ChoosemeasurementManager(managerType).GetMany(id);
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
                _ => throw new TypeAccessException("No manager to serve following managerType: " + managerType),
            };
            return manager;
        }

        private IMeasurementManager ChoosemeasurementManager(ManagerTypes managerType)
        {
            IMeasurementManager manager = managerType switch
            {
                ManagerTypes.WaterMeasurement => new WaterMeasurementManager(_configuration),
                _ => throw new TypeAccessException("No mesurement manager to serve following managerType: " + managerType),
            };
            return manager;
        }
    }
}
