using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tracker.Services.Interfaces;

namespace Tracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        IUsersService _usersService;    
        public UsersController(IUsersService usersService) 
        {
            _usersService = usersService;
        }

        [HttpGet]   
        public IActionResult Get()
        {
            return Ok();
        }

        [HttpGet("{id:int}")]

        public IActionResult Get(int id) {
            return Ok(_usersService.GetUsersById(id));  
        
        }

        [HttpGet("{username}")]
        public IActionResult Get(string username)
        {
            var user = _usersService.GetUserByUsername(username);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }


        [HttpPost]
        public IActionResult Post([FromBody] Models.Users users)
        {
            _usersService.CreateUser(users);
            return CreatedAtAction("Get", new { id = users.UserID }, users);
        }
    }
}
