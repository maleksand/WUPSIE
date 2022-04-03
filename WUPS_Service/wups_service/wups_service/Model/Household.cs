using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace wups_service.Model
{
    public class Household
    {
        [BsonId]
        public string Id { get; set; }

        [BsonElement("userId")]
        public int UserId { get; set; }
        
        [BsonElement("devices")]
        public List<Device> devices { get; set; }
    }
}
