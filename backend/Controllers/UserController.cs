using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Payltr.Interfaces;
using Payltr.Models;

namespace Payltr.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IAuthService _authService;

    public UsersController(IUserService userService, IAuthService authService)
    {
        _userService = userService;
        _authService = authService;
    }

    [HttpGet]
    public async Task<ActionResult<List<User>>> GetAll() =>
        Ok(await _userService.GetAllUsersAsync());

    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetById(Guid id)
    {
        var user = await _userService.GetUserByIdAsync(id);
        if (user == null)
            return NotFound();
        return Ok(user);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(Guid id, User user)
    {
        await _userService.UpdateUserAsync(id, user);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        await _userService.DeleteUserAsync(id);
        return NoContent();
    }

    [HttpPost("register")]
    public async Task<IActionResult> SignUp([FromBody] SignUpRequest request)
    {
        var user = new User
        {
            FirstName = request.FirstName,
            LastName = request.LastName,
            Email = request.Email
        };

        // Register user
        var createdUser = await _authService.RegisterAsync(user, request.Password);

        // Generate JWT using your existing login method
        var token = await _authService.LoginAsync(request.Email, request.Password);

        // Set JWT as HttpOnly cookie
        Response.Cookies.Append("jwt", token, new CookieOptions
        {
            HttpOnly = true,
            Secure = false,             // true in production with HTTPS
            SameSite = SameSiteMode.None // required for cross-origin
        });

        return Ok(createdUser);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        var token = await _authService.LoginAsync(request.Email, request.Password);

        Response.Cookies.Append("jwt", token, new CookieOptions
        {
            HttpOnly = true,
            Secure = true, // true in production
            SameSite = SameSiteMode.None
        });

        return Ok(new { Message = "Logged in successfully" });
    }

    [HttpPost("reset-password")]
    public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordRequest request)
    {
        var success = await _authService.ResetPasswordAsync(request.Email, request.NewPassword);
        if (!success) return NotFound("User not found");
        return Ok("Password reset successfully");
    }
}