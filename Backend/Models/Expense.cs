﻿namespace Tracker.Models
{
    public class Expense
    {
        public int ExpenseID { get; set; }
        public int UserID { get; set; }
        public string Category { get; set; }
        public string PaymentMethod { get; set; }
        public int Amount { get; set; }
        public DateTime Date { get; set; }
        public bool IsRecurring { get; set; }
        public string RecurringFrequency { get; set; }
    }
}
