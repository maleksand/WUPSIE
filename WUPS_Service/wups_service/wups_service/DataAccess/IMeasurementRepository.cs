namespace wups_service.DataAccess
{
    public interface IMeasurementRepository<T> : IRepository<T>
    {
        T GetByDate(string id, string date);
        T GetByDateRange(string id, string startDate, string endDate);
    }
}
