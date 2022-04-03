namespace wups_service.BusinessLogic
{
    public class NoManagerFoundException : ApplicationException
    {
        public NoManagerFoundException()
        {
        }

        public NoManagerFoundException(string message) : base(message)
        {
        }

        public NoManagerFoundException(string message, Exception inner) : base(message, inner)
        {
        }

    }
}
