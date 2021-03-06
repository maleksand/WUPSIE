using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using wups_service.BusinessLogic;
using wups_service.BusinessLogic.Managers;

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
        /// <param name="deviceId">Either a measurement or device ID</param>
        /// <param name="deviceType">Device type</param>
        /// <param name="startDate">(optional) Start date - YYYY-MM-DDT00:00:00</param>
        /// <param name="endDate">(optional) End date - YYYY-MM-DDT00:00:00</param>
        /// <returns>A json file with the timeseries data</returns>
        [HttpGet]
        [Route("{deviceId}/measurements")]
        public ActionResult<string> GetDeviceMesurements(string deviceId, [BindRequired] ManagerTypes deviceType, string? startDate, string? endDate)
        {
            Dictionary<string, string> queries = new Dictionary<string, string>();
            queries.Add("deviceId", deviceId);
            if (!String.IsNullOrEmpty(startDate)) queries.Add("startDate", startDate);
            if (!String.IsNullOrEmpty(endDate)) queries.Add("endDate", endDate);

            try
            {
                string measurements = _broker.GetMeasurementManager(deviceType).ResolveRequest(queries);

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
