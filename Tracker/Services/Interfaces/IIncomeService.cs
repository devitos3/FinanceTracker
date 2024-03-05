using Tracker.Models;

namespace Tracker.Services.Interfaces
{
    public interface IIncomeService
    {
        Income GetIncomeById(int id);
        List<Income> GetIncome();

        void CreateIncome(Income income);

        void UpdateIncome(Income income);

        void DeleteIncome(int id);

        public List<Income> GetIncomeByUserID(int userID);
    }
}
