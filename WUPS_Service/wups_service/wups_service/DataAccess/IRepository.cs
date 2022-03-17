namespace wups_service.DataAccess
{
    public interface IRepository<T>
    {
        T Get(string id);
        T Get(string id, string parameters);
    }
}
