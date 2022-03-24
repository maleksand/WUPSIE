using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace wups_service.Model
{
    [BsonIgnoreExtraElements]
    public class Measurement
    {
        [BsonElement("metadata")]
        public MeasuremnetMetadata Metadata { get; set; }

        [BsonElement("timestamp")]
        public DateTime Timestamp { get; set; }

        [BsonElement("measurement")]
        public double Value { get; set; }

    }

    public class MeasuremnetMetadata
    {
        [BsonElement("deviceId")]
        public string DeviceId { get; set; }

        [BsonElement("meterType")]
        public string MeterType { get; set; }
    }
}
