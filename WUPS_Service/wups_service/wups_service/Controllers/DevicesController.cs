using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using wups_service.BusinessLogic;

namespace wups_service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors("_myAllowSpecificOrigins")]
    public class DevicesController : Controller
    {
        private readonly Broker _broker;

        public DevicesController(IConfiguration config)
        {
            _broker = new Broker(config);
        }


        /// <summary>
        /// Returns measurements
        /// </summary>
        /// <param name="deviceId">Device ID</param>
        /// <param name="deviceType">Device type</param>
        /// <param name="startDate">(optional) Start date - YYYY-MM-DDT00:00:00</param>
        /// <param name="endDate">(optional) End date - YYYY-MM-DDT00:00:00</param>
        /// <returns>A json file with the timeseries data</returns>
        [HttpGet]
        [Route("{deviceId}/measurements")]
        public ActionResult<string> GetDeviceMesurements(string deviceId, [BindRequired] ManagerTypes deviceType, string? startDate, string? endDate)
        {
            string measurements;
            try
            {
                if (startDate != null && startDate.Length > 0)
                {
                    if (endDate != null && endDate.Length > 0)
                    {
                        // if both startDate and endDate is defined
                        measurements = _broker.GetByDateRange(deviceId, startDate, endDate, deviceType);
                    }
                    else
                    {
                        // if only startdate is defined
                        measurements = _broker.GetByDate(deviceId, startDate, deviceType);
                    }
                }
                else
                {
                    // if startDate and endDate is nor defined
                    measurements = _broker.GetMany(deviceId, deviceType);
                }

                return decideResponse(measurements);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }

        }
        private ActionResult<string> decideResponse(string jsonString)
        {
            //If the mongo driver does not find any it returns an empty JSON doc
            if (string.IsNullOrEmpty(jsonString))
            {
                return NotFound();
            }
            else
            {
                return Content(jsonString, "application/json");
            }
        }
    }
}
