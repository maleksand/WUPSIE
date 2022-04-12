using wups_service.Model;
using MongoDB.Driver;

namespace wups_service.DataAccess
{
    public class DeviceRepository : IRepository<List<Device>>
    {
        private Database _database;

        public DeviceRepository(IConfiguration config)
        {

            _database = new Database(config);
        }

        public List<Device> Get(string deviceId)
        {
            var collection = _database.GetMongoCollection<Device>("Devices");

            List<Device> result = new List<Device>();

            Device device = collection.Find(d => d.Id == deviceId).Single();

            result.Append(device);

            return result;
        }

        public List<Device> GetAll(string id)
        {
            throw new NotImplementedException();
        }
    }
}
