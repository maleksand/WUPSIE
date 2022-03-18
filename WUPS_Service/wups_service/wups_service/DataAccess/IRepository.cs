namespace wups_service.DataAccess
{
    public interface IRepository<T>
    {
        T Get(string id);
        T GetByDate(string id, string date);
    }
}
