
using wups_service.DataAccess;
using wups_service.Model;
using System.Text.Json;
namespace wups_service.BusinessLogic.Managers
{
    public class RegionPriceManager: IManager
    {

        private IRepository<List<RegionPrice>> _repository { get; set; }
        private JsonSerializerOptions _jsonOptions { get; set; }

        public RegionPriceManager(IConfiguration configuration)
        {
            _repository = new RegionPriceRepository(configuration);
            _jsonOptions = new JsonSerializerOptions(JsonSerializerDefaults.Web);
        }

        public string ResolveRequest(Dictionary<string, string> queries)
        {
            throw new NotImplementedException();
        }

        public string Get(string id)
        {
            RegionPrice price = _repository.Get(id).Single();
            return JsonSerializer.Serialize(price, _jsonOptions);
        }

        public string GetAll(string id)
        {
            throw new NotImplementedException();
        }
    }
}
