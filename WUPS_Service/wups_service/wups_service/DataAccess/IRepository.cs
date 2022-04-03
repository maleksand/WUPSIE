namespace wups_service.DataAccess
{
    public interface IRepository<out T>
    {
        T GetOne(string id);
        T GetMany(string id);
    }
}
