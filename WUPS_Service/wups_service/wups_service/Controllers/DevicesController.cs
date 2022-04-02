using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using wups_service.BusinessLogic;
using wups_service.DataAccess;
using wups_service.Model;

namespace wups_service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors("_myAllowSpecificOrigins")]
    public class DevicesController : Controller
    {
        private readonly Broker _broker;

        private IConfiguration Config;
        public DevicesController(IConfiguration config)
        {
            Config = config;
            _broker = new Broker(config);
        }


        /// <summary>
        /// Returns measurements
        /// </summary>
        /// <param name="id">Device ID</param>
        /// <param name="type">Device type</param>
        /// <param name="startDate">(optional) Start date - YYYY-MM-DDT00:00:00</param>
        /// <param name="endDate">(optional) End date - YYYY-MM-DDT00:00:00</param>
        /// <returns>A json file with the timeseries data</returns>
        [HttpGet]
        [Route("{id}/measurements")]
        public ActionResult<string> Get(string id, string type, string? startDate, string? endDate)
        {
            string measurements;
            try
            {
                if (startDate != null && startDate.Length > 0)
                {
                    if (endDate != null && endDate.Length > 0)
                    {
                        // if both startDate and endDate is defined
                        measurements = _broker.GetByDateRange(id, startDate, endDate, type);
                    }
                    else
                    {
                        // if only startdate is defined
                        measurements = _broker.GetByDate(id, startDate, type);
                    }
                }
                else
                {
                    // if startDate and endDate is nor defined
                    measurements = _broker.Get(id, type);
                }

                return decideResponse(measurements);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }

        }
        private ActionResult<string> decideResponse(string measurements)
        {
            //If the mongo driver does not find any it returns an empty JSON doc
            if (string.IsNullOrEmpty(measurements))
            {
                return NotFound();
            }
            else
            {
                return Content(measurements, "application/json");
            }
        }
    }
}
