using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using wups_service.BusinessLogic;
using wups_service.BusinessLogic.Managers;

namespace wups_service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors("_myAllowSpecificOrigins")]
    public class HouseholdsController : Controller
    {
        private Broker _broker;

        public HouseholdsController(IConfiguration configuration)
        {
            _broker = new Broker(configuration);
        }

        [HttpGet]
        [Route("{householdId}")]
        public IActionResult GetHousehold(string householdId)
        {
            string jsonString;
            try
            {
                jsonString = _broker.GetManager(ManagerTypes.Household).Get(householdId);
            } catch (Exception ex)
            {
                // TODO: find better soolution
                if (ex.Message == "Sequence contains no elements") return Problem($"Could not find household with ID: {householdId}", null, 404); // manuel 404 if this error happens
                return Problem(ex.Message);
            }

            if (String.IsNullOrEmpty(jsonString))
            {
                return NotFound();
            } else
            {
                return Content(jsonString, "application/json");
            }
        }

        [HttpGet]
        [Route("{householdId}/devices/measurements")]
        public IActionResult GetHouseholdDevicesMeasurements(string householdId, string? startDate, string? endDate)
        {
            Dictionary<string, string> queries = new Dictionary<string, string>();
            queries.Add("requestType", "device measurements");
            queries.Add("householdId", householdId);
            if(!String.IsNullOrEmpty(startDate)) queries.Add("startDate", startDate);
            if(!String.IsNullOrEmpty(endDate)) queries.Add("endDate", endDate);

            string jsonString;
            try
            {
                jsonString = _broker.GetManager(ManagerTypes.Household).ResolveRequest(queries);
            } catch (Exception ex)
            {
                return Problem(ex.Message);
            }

            return Content(jsonString, "application/json");
        }
    }
}
