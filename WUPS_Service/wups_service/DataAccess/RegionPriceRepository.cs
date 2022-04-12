using wups_service.Model;
using MongoDB.Driver;


namespace wups_service.DataAccess
{
    public class RegionPriceRepository : IRepository <List<RegionPrice>>
    {
        private Database _database;

        public RegionPriceRepository(IConfiguration config)
        {
            _database = new Database(config);
        }
       

        public List<RegionPrice> Get(string id)
        {

            var collection = _database.GetMongoCollection<RegionPrice>("Region-prices");

            List<RegionPrice> result = new List<RegionPrice>();

            RegionPrice regionPrice = collection.Find(p => p.RegionId == int.Parse(id)).Single();

            result.Add(regionPrice);

            return result;


        }

        public List<RegionPrice> GetAll(string id)
        {
            throw new NotImplementedException();
        }
    }
}
