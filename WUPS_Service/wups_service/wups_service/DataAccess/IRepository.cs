namespace wups_service.DataAccess
{
    public interface IRepository<T>
    {
        T Get(string id);
    }
}
