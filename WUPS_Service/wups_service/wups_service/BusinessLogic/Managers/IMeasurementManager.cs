using wups_service.DataAccess;

namespace wups_service.BusinessLogic.Managers
{
    public interface IMeasurementManager : IManager, IMeasurementRepository<string>
    {
    }
}
