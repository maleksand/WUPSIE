using wups_service.DataAccess;
using wups_service.Model;
using System.Text.Json;

namespace wups_service.BusinessLogic.Managers
{
    public class HouseholdManager : IManager
    {
        private IRepository<List<Household>> _repository { get; set; }
        private JsonSerializerOptions _jsonOptions { get; set; }

        public HouseholdManager(IConfiguration configuration)
        {
            _repository = new HouseholdRepository(configuration);
            _jsonOptions = new JsonSerializerOptions(JsonSerializerDefaults.Web);
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
            throw new NotImplementedException();
        }
    }
}