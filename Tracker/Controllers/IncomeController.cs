using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tracker.Models;
using Tracker.Services;
using Tracker.Services.Interfaces;

namespace Tracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IncomeController : ControllerBase
    {
        IIncomeService _incomeService;
        public IncomeController(IIncomeService incomeService)
        {
            _incomeService = incomeService;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_incomeService.GetIncomeById(id));
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetByUserId(int userId)
        {
            return Ok(_incomeService.GetIncomeByUserID(userId));
        }



        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_incomeService.GetIncome());
        }

        [HttpPost]
        public IActionResult Post([FromBody] Income income)
        {
            _incomeService.CreateIncome(income);
            return CreatedAtAction("Get", new { id = income.IncomeID }, income);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Income income)
        {
            if (id != income.IncomeID)
            {
                return BadRequest();
            }

            var existingIncome = _incomeService.GetIncomeById(id);
            if (existingIncome == null)
            {
                return NotFound();
            }

            _incomeService.UpdateIncome(income);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var income = _incomeService.GetIncomeById(id);
            if (income == null)
            {
                return NotFound();
            }

            _incomeService.DeleteIncome(id);

            return NoContent();
        }
    }
}
