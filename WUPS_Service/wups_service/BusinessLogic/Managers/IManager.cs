using wups_service.DataAccess;

namespace wups_service.BusinessLogic.Managers
{
    public interface IManager : IRepository<string>
    {
        public string ResolveRequest(Dictionary<string, string> queries);
    }
}
