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

        public string GetOne(string id)
        {
            Device device = _repository.GetOne(id).Single();
            return JsonSerializer.Serialize(device);
        }

        public string GetMany(string id)
        {
            List<Device> device = _repository.GetMany(id);
            return JsonSerializer.Serialize(device);
        }
    }
}