using Tracker.Models;
using Tracker.Repository.Interfaces;
using Tracker.Services.Interfaces;

namespace Tracker.Services
{
    public class GoalService : IGoalService
    {
        private IGoalRepo _GoalRepo;

        public GoalService(IGoalRepo goalRepo)
        {
            _GoalRepo = goalRepo;
        }

        public void CreateGoal(Goal goal)
        {
            _GoalRepo.CreateGoal(goal);
        }

        public Goal GetGoalById(int id)
        {
            return _GoalRepo.GetGoalById(id);
        }

        public List<Goal> GetGoals()
        {
            return _GoalRepo.GetGoals();
        }

        public void UpdateGoal(Goal goal)
        {
            _GoalRepo.UpdateGoal(goal);
        }

        public void DeleteGoal(int id)
        {
            _GoalRepo.DeleteGoal(id);
        }

        public List<Goal> GetGoalsByUserId(int userId)
        {
            return _GoalRepo.GetGoalsByUserId(userId);
        }
    }
}
