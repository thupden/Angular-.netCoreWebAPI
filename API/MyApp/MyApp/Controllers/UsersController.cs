using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyApp.Data;
using MyApp.Entities;

namespace MyApp.Controllers
{
    public class UsersController : BaseApiController
    { 
        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            var users = await _context.Users.ToListAsync();
            return Ok(users);
        }

        [Authorize]
        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsersById(int id)
        {
            var users = await _context.Users.FirstOrDefaultAsync(x=>x.Id==id);
            return Ok(users);
        }
    }
}
