using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace wups_service.Model
{
    [BsonNoId]
    public class Device
    {
        [BsonElement("deviceId")]
        public string Id { get; set; }


        [BsonElement("deviceType")]
        public string Type { get; set; }
    }
}
