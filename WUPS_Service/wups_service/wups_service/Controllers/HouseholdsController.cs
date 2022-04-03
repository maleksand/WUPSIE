using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using wups_service.BusinessLogic;
using wups_service.Model;

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

        [Route("{householdId}/devices")]
        public IActionResult GetHouseholdeDevices(string householdId)
        {
            string jsonString;
            try
            {
                jsonString = _broker.GetMany(householdId, ManagerTypes.Device);
            } catch (Exception ex)
            {
                //if (ex.Message == "Sequence contains no elements") return Problem("Could not find household", null, 404); // manuel 404 if this error happens
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
    }
}
