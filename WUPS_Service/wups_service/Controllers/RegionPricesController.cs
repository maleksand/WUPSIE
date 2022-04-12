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
    public class RegionPricesController : Controller
    {

        private readonly Broker _broker;

        public RegionPricesController(IConfiguration config)
        {
            _broker = new Broker(config);
        }

        [HttpGet]
        [Route("{regionId}/price")]
        public IActionResult GetRegionPrice(string regionId) {

            string jsonString;

            jsonString = _broker.GetManager(ManagerTypes.RegionPrice).Get(regionId);

            if (String.IsNullOrEmpty(jsonString))
            {
                return NotFound();

            }
            else {
                return Content(jsonString, "application/json");
            }
        
        
        
        }





    }
}
