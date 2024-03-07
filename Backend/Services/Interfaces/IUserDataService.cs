using Tracker.Models;

namespace Tracker.Services.Interfaces
{
    public interface IUserDataService
    {
        List<Expense> GetExpensesByUserId(int userId);
        List<Income> GetIncomesByUserId(int userId);
    }
}
