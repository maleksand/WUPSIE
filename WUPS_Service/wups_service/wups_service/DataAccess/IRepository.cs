namespace wups_service.DataAccess
{
    public interface IRepository<out T>
    {
        T Get(string id);
    }
}
