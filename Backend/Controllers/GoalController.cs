using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tracker.Models;
using Tracker.Services;
using Tracker.Services.Interfaces;

namespace Tracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GoalController : ControllerBase
    {
        IGoalService _goalService;
        public GoalController(IGoalService goalService)
        {
            _goalService = goalService;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_goalService.GetGoalById(id));
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetByUserId(int userId)
        {
            return Ok(_goalService.GetGoalsByUserId(userId));
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_goalService.GetGoals());
        }

        [HttpPost]
        public IActionResult Post([FromBody] Goal goal)
        {
            _goalService.CreateGoal(goal);
            return CreatedAtAction("Get", new { id = goal.GoalID }, goal);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Goal goal)
        {
            if (id != goal.GoalID)
            {
                return BadRequest();
            }

            var existingGoal = _goalService.GetGoalById(id);
            if (existingGoal == null)
            {
                return NotFound();
            }

            _goalService.UpdateGoal(goal);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var goal = _goalService.GetGoalById(id);
            if (goal == null)
            {
                return NotFound();
            }

            _goalService.DeleteGoal(id);

            return NoContent();
        }
    }
}
