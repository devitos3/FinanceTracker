using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tracker.Models;
using Tracker.Services;
using Tracker.Services.Interfaces;

namespace Tracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpenseController : ControllerBase
    {
        IExpenseService _expenseService;
        public ExpenseController(IExpenseService expenseService)
        {
            _expenseService = expenseService;
        }


        [HttpGet("{id}")]

        public IActionResult Get(int id)
        {
            return Ok(_expenseService.GetExpenseById(id));

        }

        [HttpGet]

        public IActionResult Get()
        {
            return Ok(_expenseService.GetExpense());
        }


        [HttpGet("user/{userId}")]
        public IActionResult GetByUserId(int userId)
        {
            return Ok(_expenseService.GetExpenseByUserID(userId));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Expense expense)
        {
            _expenseService.CreateExpense(expense);
            return CreatedAtAction("Get", new { id = expense.ExpenseID }, expense);
        }

        [HttpPut("{id}")]

        
        public IActionResult Put(int id, [FromBody] Expense expense)
        {
            if (id != expense.ExpenseID)
            {
                return BadRequest();
            }

            var existingExpense = _expenseService.GetExpenseById(id);
            if (existingExpense == null)
            {
                return NotFound();
            }

            _expenseService.UpdateExpense(expense);

            return NoContent();
        }



        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var expense = _expenseService.GetExpenseById(id);
            if (expense == null)
            {
                return NotFound();
            }

            _expenseService.DeleteExpense(id);

            return NoContent();
        }


    }
}
