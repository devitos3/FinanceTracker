// UserDataController.cs
using Microsoft.AspNetCore.Mvc;
using Tracker.Services;
using System.Collections.Generic;
using Tracker.Models;
using Tracker.Services.Interfaces;

namespace Tracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDataController : ControllerBase
    {
        private readonly IUserDataService _userDataService;

        public UserDataController(IUserDataService userDataService)
        {
            _userDataService = userDataService;
        }

        [HttpGet("{userId}")]
        public IActionResult GetUserData(int userId)
        {
            var expenses = _userDataService.GetExpensesByUserId(userId);
            var incomes = _userDataService.GetIncomesByUserId(userId);

            return Ok(new { expenses, incomes });
        }
    }
}
