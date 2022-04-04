using wups_service.DataAccess;
using wups_service.Model;
using System.Text.Json;

namespace wups_service.BusinessLogic
{
    public class DeviceManager : IManager
    {
        public IRepository<List<Device>> _repository { get; set; }

        public DeviceManager(IConfiguration configuration)
        {
            _repository = new DeviceRepository(configuration);
        }

        public string Get(string id)
        {
            Device device = _repository.Get(id).Single();
            return JsonSerializer.Serialize(device);
        }

        public string GetAll(string id)
        {
            List<Device> devices = _repository.GetAll(id);
            return JsonSerializer.Serialize(devices);
        }
    }
}