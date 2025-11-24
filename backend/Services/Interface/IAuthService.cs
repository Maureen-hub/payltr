using Payltr.Models;

namespace Payltr.Interfaces;

public interface IAuthService
{
    Task<User> RegisterAsync(User user, string password);
    Task<string> LoginAsync(string email, string password);
    Task<bool> ResetPasswordAsync(string email, string newPassword);
    Task<bool> VerifyEmailAsync(string token);
}
