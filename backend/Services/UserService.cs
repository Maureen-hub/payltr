using Microsoft.EntityFrameworkCore;
using Payltr.Data;
using Payltr.Interfaces;
using Payltr.Models;

namespace Payltr.Services;

public class UserService : IUserService
{
    private readonly PayltrDbContext _context;
    public UserService(PayltrDbContext context) => _context = context;

    public async Task<List<User>> GetAllUsersAsync() =>
        await _context.Users.Where(u => !u.IsDeleted).ToListAsync();

    public async Task<User?> GetUserByIdAsync(Guid id) =>
        await _context.Users.FirstOrDefaultAsync(u => u.UserID == id && !u.IsDeleted);

    public async Task<User> CreateUserAsync(User user)
    {
        user.UserID = Guid.NewGuid();
        user.CreatedAt = DateTime.UtcNow;
        user.ModifiedAt = DateTime.UtcNow;
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return user;
    }

    public async Task UpdateUserAsync(Guid id, User user)
    {
        var existing = await _context.Users.FindAsync(id);
        if (existing == null)
            throw new Exception("User not found");

        existing.FirstName = user.FirstName;
        existing.LastName = user.LastName;
        existing.Address = user.Address;
        existing.City = user.City;
        existing.State = user.State;
        existing.Country = user.Country;
        existing.ModifiedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();
    }

    public async Task DeleteUserAsync(Guid id)
    {
        var existing = await _context.Users.FindAsync(id);
        if (existing == null)
            throw new Exception("User not found");

        existing.IsDeleted = true;
        existing.ModifiedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();
    }
}