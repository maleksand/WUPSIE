using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace wups_service.Model
{
    public class WaterMeasurement
    {
        [BsonRepresentation(BsonType.ObjectId)] // https://mongodb.github.io/mongo-csharp-driver/2.10/reference/bson/mapping/#objectids
        public string Id { get; set; }

        [BsonElement("metadata")]
        public WaterMeasuremnetMetadata Metadata { get; set; }

        [BsonElement("timestamp")]
        public DateTime Timestamp { get; set; }

        [BsonElement("measurement")]
        public double Value { get; set; }
    }

    public class WaterMeasuremnetMetadata
    {
        [BsonElement("deviceId")]
        public string DeviceId { get; set; }

        [BsonElement("meterType")]
        public string MeterType { get; set; }
    }
}
