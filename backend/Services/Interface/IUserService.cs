using Payltr.Models;

namespace Payltr.Interfaces;

public interface IUserService
{
    Task<List<User>> GetAllUsersAsync();
    Task<User?> GetUserByIdAsync(Guid id);
    Task<User> CreateUserAsync(User user);
    Task UpdateUserAsync(Guid id, User user);
    Task DeleteUserAsync(Guid id);
}