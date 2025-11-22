using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Payltr.Data;
using Payltr.Interfaces;
using Payltr.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace Payltr.Services;

public class AuthService : IAuthService
{
    private readonly PayltrDbContext _context;
    private readonly IConfiguration _config;

    public AuthService(PayltrDbContext context, IConfiguration config)
    {
        _context = context;
        _config = config;
    }

    public async Task<User> RegisterAsync(User user, string password)
    {
        if (await _context.Users.AnyAsync(u => u.Email == user.Email))
            throw new Exception("Email already exists");

        user.UserID = Guid.NewGuid();
        user.PasswordHash = HashPassword(password);
        user.CreatedAt = DateTime.UtcNow;
        user.ModifiedAt = DateTime.UtcNow;

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return user;
    }

    public async Task<string> LoginAsync(string email, string password)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email && !u.IsDeleted);
        if (user == null || !VerifyPassword(password, user.PasswordHash))
            throw new Exception("Invalid email or password");

        return GenerateJwtToken(user);
    }

    public async Task<bool> ResetPasswordAsync(string email, string newPassword)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email && !u.IsDeleted);
        if (user == null) return false;

        user.PasswordHash = HashPassword(newPassword);
        user.ModifiedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();
        return true;
    }

    // Password hashing
    private string HashPassword(string password)
    {
        using var sha = SHA256.Create();
        var bytes = Encoding.UTF8.GetBytes(password);
        return Convert.ToBase64String(sha.ComputeHash(bytes));
    }

    private bool VerifyPassword(string password, string hash) =>
        HashPassword(password) == hash;

    // JWT generation
    private string GenerateJwtToken(User user)
    {
        var jwtSettings = _config.GetSection("JwtSettings");
        var key = Encoding.ASCII.GetBytes(jwtSettings["SecretKey"]);

        var tokenHandler = new JwtSecurityTokenHandler();
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.UserID.ToString()),
                new Claim(ClaimTypes.Email, user.Email)
            }),
            Expires = DateTime.UtcNow.AddMinutes(double.Parse(jwtSettings["ExpiryMinutes"])),
            Issuer = jwtSettings["Issuer"],
            Audience = jwtSettings["Audience"],
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}
