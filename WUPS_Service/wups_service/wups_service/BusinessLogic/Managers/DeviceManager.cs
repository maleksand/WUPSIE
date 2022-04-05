using wups_service.DataAccess;
using wups_service.Model;
using System.Text.Json;

namespace wups_service.BusinessLogic.Managers
{
    public class DeviceManager : IManager
    {
        private IRepository<List<Device>> _repository { get; set; }
        private JsonSerializerOptions _jsonOptions { get; set; }

        public DeviceManager(IConfiguration configuration)
        {
            _repository = new DeviceRepository(configuration);
            _jsonOptions = new JsonSerializerOptions(JsonSerializerDefaults.Web);
        }

        public string Get(string id)
        {
            Device device = _repository.Get(id).Single();
            return JsonSerializer.Serialize(device, _jsonOptions);
        }

        public string GetAll(string id)
        {
            List<Device> devices = _repository.GetAll(id);
            return JsonSerializer.Serialize(devices, _jsonOptions);
        }

        public string ResolveRequest(Dictionary<string, string> queries)
        {
            throw new NotImplementedException();
        }
    }
}