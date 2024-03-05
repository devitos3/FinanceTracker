using Tracker.Models;
using Tracker.Repository;
using Tracker.Repository.Interfaces;
using Tracker.Services.Interfaces;

namespace Tracker.Services
{
    public class BudgetsService : IBudgetsService
    {
        IBudgetsRepo _BudgetsRepo;

        public BudgetsService(IBudgetsRepo  budgetsRepo)
        {
            _BudgetsRepo = budgetsRepo;
        }
        public void CreateBudget(Budgets budgets)
        {
           _BudgetsRepo.CreateBudget(budgets); 
        }

        public List<Budgets> GetBudget()
        {
            return _BudgetsRepo.GetBudget();
        }
        public Budgets GetBudgetById(int id)
        {
            
            return _BudgetsRepo.GetBudgetById(id);
        }


        public void UpdateBudget(Budgets budgets)
        {
            _BudgetsRepo.UpdateBudget(budgets);
        }

        public void DeleteBudget(int id)
        {
            _BudgetsRepo.DeleteBudget(id);
        }

        public List<Budgets> GetBudgetByUserID(int userID)
        {
           return _BudgetsRepo.GetBudgetByUserID(userID);
        }
    }
}
