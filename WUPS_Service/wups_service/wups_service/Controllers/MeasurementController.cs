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
        /// <returns>A json file with the timeseries data</returns>
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
        /// <returns>A json file with the timeseries data</returns>
        [HttpGet("bydate")]
        public ActionResult<string> GetByDate(string id, string date)
        {
            string json = _measurementRepository.GetByDate(id, date);

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
        /// Returns measurements within the date range
        /// </summary>
        /// <param name="id">DeviceId</param>
        /// <param name="startDate">Start date</param>
        /// <param name="endDate">End date</param>
        /// <returns>A json file with the timeseries data</returns>
        [HttpGet("bydaterange")]
        public ActionResult<string> GetByDateRange(string id, string startDate, string endDate)
        {
            string json = _measurementRepository.GetByDateRange(id, startDate, endDate);

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