namespace Tracker.Models
{
    public class Goal
    {
        public int GoalID { get; set; }
        public int UserID { get; set; }
        public string GoalName { get; set; }
        public DateTime? GoalStart { get; set; }
        public DateTime? GoalComplete { get; set; }
        public int TargetAmount { get; set; }
        public int CurrentAmount { get; set; }
    }
}
