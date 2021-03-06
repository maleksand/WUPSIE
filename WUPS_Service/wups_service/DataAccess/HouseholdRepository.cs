using wups_service.Model;
using MongoDB.Driver;

namespace wups_service.DataAccess
{
    public class HouseholdRepository : IRepository<List<Household>>
    {
        private Database _database;

        public HouseholdRepository(IConfiguration config)
        {

            _database = new Database(config);
        }

        public List<Household> Get(string householdId)
        {
            var collection = _database.GetMongoCollection<Household>("Households");

            List<Household> result = collection.Find(h => h.Id == householdId).ToList();

            return result;
        }

        public List<Household> GetAll(string userId)
        {
            int id = int.Parse(userId);

            var collection = _database.GetMongoCollection<Household>("Households");

            List<Household> result = collection.Find(h => h.UserId == id).ToList();

            return result;
        }
    }
}
