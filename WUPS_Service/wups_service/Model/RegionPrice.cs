using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace wups_service.Model
{
    public class RegionPrice
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("regionId")]

        public int RegionId { get; set; }

        [BsonElement("regionName")]
        public string RegionName { get; set; }

        [BsonElement("pricePrCubic")]

        public double PricePerCubic { get; set; }


    }
}