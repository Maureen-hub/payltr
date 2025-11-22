public class NotFoundException : Exception
{
    public NotFoundException(string message) : base(message) { }
}

public class BadRequestException : Exception
{
    public BadRequestException(string message) : base(message) { }
}

public class ConflictException : Exception
{
    public ConflictException(string message) : base(message) { }
}

public class AuthenticationException : Exception
{
    public AuthenticationException(string message) : base(message) { }
}
public class AuthorizationException : Exception
{
    public AuthorizationException(string message) : base(message) { }
}