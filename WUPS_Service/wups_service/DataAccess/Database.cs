using MongoDB.Driver;
using wups_service.Model;

namespace wups_service.DataAccess
{
    public class Database
    {
        private string _connectionString;
        private string _databaseName;

        public Database(IConfiguration configuration)
        {
            _connectionString = configuration.GetSection("MongoConnection")["ConnectionString"];
            _databaseName = configuration.GetSection("MongoConnection")["Database"];
        }



        /// <summary>
        /// Creating a connection to the mongoDB
        /// </summary>
        /// <param name="collectionName"></param>
        /// <returns></returns>
        public IMongoCollection<T> GetMongoCollection<T>(string collectionName)
        {
            //TODO Get the connectionstring into appsettings.json

            MongoUrl mongoUrl = new(_connectionString);

            MongoClient dbClient = new(mongoUrl);

            var database = dbClient.GetDatabase(_databaseName);
            var collection = database.GetCollection<T>(collectionName);

            return collection;
        }
    }
}
