using Tracker.Models;

namespace Tracker.Services.Interfaces
{
    public interface IGoalService
    {
        Goal GetGoalById(int id);
        List<Goal> GetGoals();

        void CreateGoal(Goal goal);

        void UpdateGoal(Goal goal);

        void DeleteGoal(int id);

        List<Goal> GetGoalsByUserId(int userId);
    }
}
