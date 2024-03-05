namespace Tracker.Models
{
    public class Budgets
    {
        public int BudgetID { get; set; }
        public int UserID { get; set; }
        public string Category { get; set; }
        public int BudgetLimit { get; set; }
        public int CurrentSpending { get; set; }

        //foreign key field 
        //public Users Users { get; set; }

    }
}
