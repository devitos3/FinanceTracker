using Tracker.Models;

namespace Tracker.Services.Interfaces
{
    public interface IExpenseService
    {
        Expense GetExpenseById(int id);

        public List<Expense> GetExpense();

        void CreateExpense(Expense expense);

        void UpdateExpense(Expense expense);

        void DeleteExpense(int id);
        public List<Expense> GetExpenseByUserID(int userID);
    }
}
