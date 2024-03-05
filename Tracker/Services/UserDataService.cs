using System.Collections.Generic;
using Tracker.Models;
using Tracker.Repository.Interfaces;
using Tracker.Services.Interfaces;

namespace Tracker.Services
{
    public class UserDataService : IUserDataService
    {
        private readonly IExpenseRepo _expenseRepo;
        private readonly IIncomeRepo _incomeRepo;

        public UserDataService(IExpenseRepo expenseRepo, IIncomeRepo incomeRepo)
        {
            _expenseRepo = expenseRepo;
            _incomeRepo = incomeRepo;
        }

        public List<Expense> GetExpensesByUserId(int userId)
        {
            return _expenseRepo.GetExpenseByUserID(userId);
        }

        public List<Income> GetIncomesByUserId(int userId)
        {
            // Assuming you have a method in IIncomeRepo to get income by UserID
            return _incomeRepo.GetIncomeByUserID(userId);
        }
    }
}
