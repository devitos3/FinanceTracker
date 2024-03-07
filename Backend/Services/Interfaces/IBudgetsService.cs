using Tracker.Models;

namespace Tracker.Services.Interfaces
{
    public interface IBudgetsService
    {
        void CreateBudget(Budgets budgets);

        public List<Budgets> GetBudget();

        Budgets GetBudgetById(int id);

        void UpdateBudget(Budgets budgets);

        void DeleteBudget(int id);
        public List<Budgets> GetBudgetByUserID(int userID);
    }
}
