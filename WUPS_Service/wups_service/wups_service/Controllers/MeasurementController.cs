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

            //If the mongo driver does not find any it returns an empty JSON doc
            if (json == "[]")
            {
                return NotFound();
            }
            else
            {
                return Ok(json);
            }
        }


        [HttpGet("bydate")]

        public ActionResult<string> Get(string id, string date)
        {
            string json = _measurementRepository.Get(id,date);

            //If the mongo driver does not find any it returns an empty JSON doc
            if (json == "[]")
            {
                return NotFound();
            }
            else
            {
                return Ok(json);
            }
        }
    }

}