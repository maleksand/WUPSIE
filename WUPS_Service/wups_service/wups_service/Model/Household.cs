using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace wups_service.Model
{
    public class Household
    {
        [BsonRepresentation(BsonType.String)]
        public string Id { get; set; }

        [BsonElement("userId")]
        public int UserId { get; set; }
        
        [BsonElement("devices")]
        public List<HouseholdDevice> Devices { get; set; }
    
        [BsonNoId]
        public class HouseholdDevice
        {
            [BsonElement("deviceId")]
            public string Id { get; set; }

            [BsonElement("deviceType")]
            public string Type { get; set; }
        }
    }
}
