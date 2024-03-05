using Tracker.Models;
using Tracker.Repository.Interfaces;
using Tracker.Services.Interfaces;

namespace Tracker.Services
{
    public class IncomeService : IIncomeService
    {
        private IIncomeRepo _IncomeRepo;

        public IncomeService(IIncomeRepo incomeRepo)
        {
            _IncomeRepo = incomeRepo;
        }

        public void CreateIncome(Income income)
        {
            _IncomeRepo.CreateIncome(income);
        }

        public Income GetIncomeById(int id)
        {
            return _IncomeRepo.GetIncomeById(id);
        }

        public List<Income> GetIncome()
        {
            return _IncomeRepo.GetIncome();   
        }

        public void UpdateIncome(Income income)
        {
            _IncomeRepo.UpdateIncome(income);
        }

        public void DeleteIncome(int id)
        {
            _IncomeRepo.DeleteIncome(id);
        }
        public List<Income> GetIncomeByUserID(int userID)
        {
            return _IncomeRepo.GetIncomeByUserID(userID);
        }
    }
}
