using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace wups_service.Model
{
    [BsonNoId]
    public class Device
    {
        [BsonRepresentation(BsonType.String)]
        public string Id { get; set; }


        [BsonElement("deviceType")]
        public string Type { get; set; }
    }
}
