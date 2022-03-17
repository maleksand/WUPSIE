using Microsoft.AspNetCore.Mvc;
using wups_service.DataAccess;

namespace wups_service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MeasurementController : ControllerBase
    {
        private readonly MeasurementRepository _measurementRepository;

        public MeasurementController()
        {
            _measurementRepository = new MeasurementRepository();
        }

        //Get api/MeasurementController
        [HttpGet]
        public ActionResult<string> Get(string id)
        {
            string json = _measurementRepository.Get(id);

            return Ok(json);
        }
    }

}