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

        
        /// <summary>
        /// Returns all measurements related to the deviceId
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Returns measurements from the chosen date plus 24 hours
        /// </summary>
        /// <param name="id"></param>
        /// <param name="date"> YYYY-MM-DDT00:00:00</param>
        /// <returns></returns>
        [HttpGet("bydate")]
        public ActionResult<string> GetByDate(string id, string date)
        {
            string json = _measurementRepository.GetByDate(id,date);

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