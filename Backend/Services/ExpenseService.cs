using Tracker.Models;
using Tracker.Repository.Interfaces;
using Tracker.Services.Interfaces;

namespace Tracker.Services
{
    public class ExpenseService : IExpenseService
    {

        private IExpenseRepo _ExpenseRepo;

        public ExpenseService(IExpenseRepo expenseRepo)
        {
            _ExpenseRepo = expenseRepo;
        }
        public void CreateExpense(Expense expense)
        {
            _ExpenseRepo.CreateExpense(expense);
        }

        public Expense GetExpenseById(int id)
        {
            return _ExpenseRepo.GetExpenseById(id);
        }

        public List<Expense> GetExpense()
        {
            return _ExpenseRepo.GetExpense();
        }

        public void UpdateExpense(Expense expense)
        {
            _ExpenseRepo.UpdateExpense(expense);
        }

        public void DeleteExpense(int id) {
            _ExpenseRepo.DeleteExpense(id);
        }
        public List<Expense> GetExpenseByUserID(int userID)
        {
            return _ExpenseRepo.GetExpenseByUserID(userID);
        }
    }
}
