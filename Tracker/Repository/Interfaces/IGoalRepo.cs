using Tracker.Models;

namespace Tracker.Repository.Interfaces
{
    public interface IGoalRepo
    {
        Goal GetGoalById(int id);
        List<Goal> GetGoals();

        void CreateGoal(Goal goal);

        void UpdateGoal(Goal goal);

        void DeleteGoal(int id);

        List<Goal> GetGoalsByUserId(int userId);
    }
}
