using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using wups_service.DataAccess;
using wups_service.Model;

namespace wups_service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors("_myAllowSpecificOrigins")]
    public class MeasurementsController : Controller
    {
        private readonly MeasurementRepository _measurementRepository;

        public MeasurementsController()
        {
            _measurementRepository = new MeasurementRepository();
        }


        /// <summary>
        /// Returns measurements
        /// </summary>
        /// <param name="id">DeviceId</param>
        /// <param name="startDate">(optional) Start date - YYYY-MM-DDT00:00:00</param>
        /// <param name="endDate">(optional) End date - YYYY-MM-DDT00:00:00</param>
        /// <returns>A json file with the timeseries data</returns>
        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<string>> Get(string id, string? startDate, string? endDate)
        {
            List<Measurement> measurements = new List<Measurement>();
            if (startDate != null && startDate.Length > 0)
            {
                if (endDate != null && endDate.Length > 0)
                {
                    // if both startDate and endDate is defined
                    measurements = _measurementRepository.GetByDateRange(id, startDate, endDate);
                }
                else
                {
                    // if only startdate is defined
                    measurements = _measurementRepository.GetByDate(id, startDate);
                }
            }
            else
            {
                // if startDate and endDate is nor defined
                measurements = _measurementRepository.Get(id);
            }

            //If the mongo driver does not find any it returns an empty JSON doc
            if (measurements.Count < 1)
            {
                // TODO: what if the database conncetion is down? in that case it should be statuscode 500
                return NotFound();
            }
            else
            {
                return Json(measurements);
            }
        }
    }
}
