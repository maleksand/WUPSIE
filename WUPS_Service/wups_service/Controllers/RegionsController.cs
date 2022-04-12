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
    public class RegionsController : Controller
    {

        private readonly Broker _broker;

        public RegionsController(IConfiguration config)
        {
            _broker = new Broker(config);
        }

        [HttpGet]
        [Route("{regionId}/price")]
        public IActionResult GetRegionPrice(string regionId)
        {

            string jsonString;

            try { jsonString = _broker.GetManager(ManagerTypes.RegionPrice).Get(regionId); }
            catch (Exception ex)
            {
                if (ex.Message == "Sequence contains no elements") return Problem($"Could not find region with ID: {regionId}", null, 404);
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
