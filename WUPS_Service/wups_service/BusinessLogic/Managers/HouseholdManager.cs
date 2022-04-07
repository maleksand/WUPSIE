using wups_service.DataAccess;
using wups_service.Model;
using System.Text.Json;
using System.Dynamic;

namespace wups_service.BusinessLogic.Managers
{
    public class HouseholdManager : IManager
    {
        private IRepository<List<Household>> _repository { get; set; }
        private JsonSerializerOptions _jsonOptions { get; set; }
        private Broker _broker { get; set; }

        public HouseholdManager(IConfiguration configuration)
        {
            _repository = new HouseholdRepository(configuration);
            _jsonOptions = new JsonSerializerOptions(JsonSerializerDefaults.Web);
            _broker = new Broker(configuration);
        }

        public string Get(string householdId)
        {
            Household household = _repository.Get(householdId).Single();
            return JsonSerializer.Serialize(household, _jsonOptions);
        }

        public string GetAll(string userId)
        {
            List<Household> household = _repository.GetAll(userId);
            return JsonSerializer.Serialize(household, _jsonOptions);
        }

        public string ResolveRequest(Dictionary<string, string> queries)
        {
            string? requestType = queries.GetValueOrDefault("requestType");
            string householdId = queries.GetValueOrDefault("householdId") ?? "";
            string? startDate = queries.GetValueOrDefault("startDate");
            string? endDate = queries.GetValueOrDefault("endDate");   

            string result = "";
            if(requestType == "device measurements")
            {
                result = GetDevicesMeasurements(householdId, startDate, endDate);
            }

            return result;
        }

        private string GetDevicesMeasurements(string householdId, string? startDate, string? endDate)
        {
            Household household = _repository.Get(householdId).Single();

            
            string jsonString = "{"; // start json object

            int i = 0;
            foreach(Household.HouseholdDevice device in household.Devices)
            {
                ManagerTypes manager = (ManagerTypes)Enum.Parse(typeof(ManagerTypes), device.Type, true);

                jsonString += $"\"{device.Id}\":"; // set measurements inside attribute 
                
                if (!String.IsNullOrEmpty(startDate))
                {
                    if (!String.IsNullOrEmpty(endDate))
                    {
                        // if both startDate and endDate is defined
                        jsonString += _broker.GetMeasurementManager(manager).GetByDateRange(device.Id, startDate, endDate); // add measurements to json
                    }
                    else
                    {
                        // if only startdate is defined
                        jsonString += _broker.GetMeasurementManager(manager).GetByDate(device.Id, startDate); // add measurements to json
                    }
                }
                else
                {
                    jsonString += _broker.GetMeasurementManager(manager).GetAll(device.Id); // add measurements to json
                }
                
                if (++i < household.Devices.Count()) jsonString += ","; // add comma in jsonString
            }

            jsonString += "}";

            return jsonString;
        }
    }
}