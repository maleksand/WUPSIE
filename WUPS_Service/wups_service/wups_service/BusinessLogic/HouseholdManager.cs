using wups_service.DataAccess;
using wups_service.Model;
using System.Text.Json;

namespace wups_service.BusinessLogic
{
    public class HouseholdManager : IManager
    {
        public IRepository<List<Household>> _repository { get; set; }

        public HouseholdManager(IConfiguration configuration)
        {
            _repository = new HouseholdRepository(configuration);
        }

        public string Get(string id)
        {
            Household household = _repository.Get(id).Single();
            return JsonSerializer.Serialize(household);
        }

        public string GetAll(string id)
        {
            throw new NotImplementedException();
        }
    }
}