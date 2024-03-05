using Tracker.Models;

namespace Tracker.Repository.Interfaces
{
    public interface IIncomeRepo
    {
        Income GetIncomeById(int id);
        List<Income> GetIncome();

        void CreateIncome(Income income);

        void UpdateIncome(Income income);

        void DeleteIncome(int id);

        public List<Income> GetIncomeByUserID(int userID);
    }
}
