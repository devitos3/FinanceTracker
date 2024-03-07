using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tracker.Models;
using Tracker.Services;
using Tracker.Services.Interfaces;

namespace Tracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BudgetsController : ControllerBase
    {
        private readonly IBudgetsService _budgetsService;

        // Constructor that uses dependency injection to initialize _budgetsService
        public BudgetsController(IBudgetsService budgetsService)
        {
            _budgetsService = budgetsService;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Budgets budgets)
        {
            _budgetsService.CreateBudget(budgets);
             return StatusCode(201);
        }


        [HttpGet("user/{userId}")]
        public IActionResult GetByUserId(int userId)
        {
            return Ok(_budgetsService.GetBudgetByUserID(userId));
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_budgetsService.GetBudget());
        }


        [HttpGet("{id}")]

        public IActionResult Get(int id)
        {
            return Ok(_budgetsService.GetBudgetById(id));

        }



        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Budgets budgets)
        {
            if (id != budgets.BudgetID)
            {
                return BadRequest();
            }

            var existingBudget = _budgetsService.GetBudgetById(id);
            if (existingBudget == null)
            {
                return NotFound();
            }

          

            _budgetsService.UpdateBudget(budgets);

             return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var budget = _budgetsService.GetBudgetById(id);
            if (budget == null)
            {
                return NotFound();
            }

            _budgetsService.DeleteBudget(id);

            return NoContent();
        }

    }
}
