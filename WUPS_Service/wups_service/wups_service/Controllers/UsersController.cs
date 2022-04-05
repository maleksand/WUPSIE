using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using wups_service.BusinessLogic;
using wups_service.BusinessLogic.Managers;

namespace wups_service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors("_myAllowSpecificOrigins")]
    public class UsersController : Controller
    {
        private Broker _broker;

        public UsersController(IConfiguration configuration)
        {
            _broker = new Broker(configuration);
        }

        [HttpGet]
        [Route("{userId}/households")]
        public IActionResult GetUserHouseholds(string userId)
        {
            string jsonString;
            try
            {
                jsonString = _broker.GetManager(ManagerTypes.Household).GetAll(userId);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }

            if (String.IsNullOrEmpty(jsonString))
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
