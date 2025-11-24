using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
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
    private readonly JwtSettings _jwtSettings;
    private readonly string _frontendUrl;

    public AuthService(PayltrDbContext context, IConfiguration config, IOptions<JwtSettings> jwtOptions)
    {
        _context = context;
        _config = config;
        _jwtSettings = jwtOptions.Value;

        _frontendUrl = config["Frontend:BaseUrl"] ?? throw new InvalidOperationException("Frontend URL is not configured.");

        if (string.IsNullOrEmpty(_jwtSettings.Secret))
            throw new InvalidOperationException("JWT secret is not configured.");
    }

    public async Task<User> RegisterAsync(User user, string password)
    {
        if (await _context.Users.AnyAsync(u => u.Email == user.Email))
            throw new Exception("Email already exists");

        user.UserID = Guid.NewGuid();

        // Generate password hash and salt
        var (hash, salt) = HashPassword(password);
        user.PasswordHash = hash;
        user.PasswordSalt = salt;

        user.CreatedAt = DateTime.UtcNow;
        user.ModifiedAt = DateTime.UtcNow;

        // Generate 256-bit email verification token
        var tokenBytes = RandomNumberGenerator.GetBytes(32);
        var token = Convert.ToBase64String(tokenBytes);

        user.EmailVerificationToken = token;
        user.TokenExpiry = DateTime.UtcNow.AddHours(24);
        user.EmailVerified = false;

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        // Send verification email
        var verificationLink = $"{_frontendUrl}/verify-email?token={Uri.EscapeDataString(token)}";
        var subject = "Verify your email";
        var body = $"<p>Hi {user.FirstName},</p>" +
                   $"<p>Thank you for registering with Payltr. Please verify your email by clicking the link below:</p>" +
                   $"<p><a href='{verificationLink}'>Verify Email</a></p>";

        await EmailHelper.SendAsync(user.Email, subject, body);

        return user;
    }

    public async Task<string> LoginAsync(string email, string password)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email && !u.IsDeleted);
        if (user == null || !VerifyPassword(password, user.PasswordHash, user.PasswordSalt))
            throw new Exception("Invalid email or password");

        return GenerateJwtToken(user);
    }

    public async Task<bool> ResetPasswordAsync(string email, string newPassword)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email && !u.IsDeleted);
        if (user == null) return false;

        var (hash, salt) = HashPassword(newPassword);
        user.PasswordHash = hash;
        user.PasswordSalt = salt;
        user.ModifiedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();
        return true;
    }

    private (string hash, string salt) HashPassword(string password)
    {
        // Generate a random salt for each user
        var saltBytes = RandomNumberGenerator.GetBytes(16); // 128-bit salt
        var salt = Convert.ToBase64String(saltBytes);

        // Combine password + salt and hash
        using var sha = SHA256.Create();
        var combined = Encoding.UTF8.GetBytes(password + salt);
        var hash = Convert.ToBase64String(sha.ComputeHash(combined));

        return (hash, salt);
    }

    private bool VerifyPassword(string password, string storedHash, string storedSalt)
    {
        using var sha = SHA256.Create();
        var combined = Encoding.UTF8.GetBytes(password + storedSalt);
        var hash = Convert.ToBase64String(sha.ComputeHash(combined));

        return hash == storedHash;
    }

    // JWT generation
    private string GenerateJwtToken(User user)
    {
        var key = Encoding.ASCII.GetBytes(_jwtSettings.Secret);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim("id", user.UserID.ToString()),
                new Claim(ClaimTypes.Email, user.Email ?? string.Empty),
            }),
            Expires = DateTime.UtcNow.AddMinutes(_jwtSettings.ExpiryMinutes),
            SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature)
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }

    public async Task<bool> VerifyEmailAsync(string token)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u =>
            u.EmailVerificationToken == token && u.TokenExpiry > DateTime.UtcNow);

        if (user == null) return false;

        user.EmailVerified = true;
        user.EmailVerificationToken = null;
        user.TokenExpiry = null;
        await _context.SaveChangesAsync();

        return true;
    }
}
