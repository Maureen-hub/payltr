using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Payltr.Interfaces;
using Payltr.Models;

namespace Payltr.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly IUserService _service;
    public UsersController(IUserService service) => _service = service;

    [HttpGet]
    public async Task<ActionResult<List<User>>> GetAll() =>
        Ok(await _service.GetAllUsersAsync());

    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetById(Guid id)
    {
        var user = await _service.GetUserByIdAsync(id);
        if (user == null)
            return NotFound();
        return Ok(user);
    }

    [HttpPost]
    public async Task<ActionResult<User>> Create(User user)
    {
        var createdUser = await _service.CreateUserAsync(user);
        return CreatedAtAction(nameof(GetById), new
        {
            id = createdUser.UserID
        }, createdUser);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(Guid id, User user)
    {
        await _service.UpdateUserAsync(id, user);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        await _service.DeleteUserAsync(id);
        return NoContent();
    }
}