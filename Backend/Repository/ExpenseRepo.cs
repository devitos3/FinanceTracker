using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Tracker.Models;
using Tracker.Repository.Interfaces;

namespace Tracker.Repository
{
    public class ExpenseRepo : IExpenseRepo
    {
        readonly string ConnectionString = "";
        public ExpenseRepo()
        {
            ConnectionString = "Data Source=APINP-ELPTCKU92\\SQLEXPRESS;Initial Catalog=Tracker;Persist Security Info=True;User ID=tap2023;Password=tap2023;Encrypt=False";
        }

        public void CreateExpense(Expense expense)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(ConnectionString))
                {
                    string query = "INSERT INTO Expense (UserID, Category, PaymentMethod, Amount, Date, IsRecurring, RecurringFrequency) VALUES (@UserID, @Category, @PaymentMethod, @Amount, @Date, @IsRecurring, @RecurringFrequency)";
                    SqlCommand cmd = new SqlCommand(query, con);
                    cmd.Parameters.AddWithValue("@UserID", expense.UserID);
                    cmd.Parameters.AddWithValue("@Category", expense.Category);
                    cmd.Parameters.AddWithValue("@PaymentMethod", expense.PaymentMethod);
                    cmd.Parameters.AddWithValue("@Amount", expense.Amount);
                    cmd.Parameters.AddWithValue("@Date", expense.Date);
                    cmd.Parameters.AddWithValue("@IsRecurring", expense.IsRecurring);
                    cmd.Parameters.AddWithValue("@RecurringFrequency", expense.RecurringFrequency ?? (object)DBNull.Value);
                    con.Open();
                    cmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception Caught in CreateExpense: " + ex.Message);
            }
        }

        public Expense GetExpenseById(int id)
        {
            Expense expense = null;
            try
            {
                using (SqlConnection con = new SqlConnection(ConnectionString))
                {
                    string query = $"SELECT * FROM Expense WHERE ExpenseID={id}";
                    SqlCommand cmd = con.CreateCommand();
                    cmd.CommandText = query;
                    con.Open();
                    SqlDataReader dr = cmd.ExecuteReader();

                    if (dr.Read())
                    {
                        expense = new Expense();
                        expense.ExpenseID = (int)dr["ExpenseID"];
                        expense.UserID = (int)dr["UserID"];
                        expense.Category = dr["Category"].ToString();
                        expense.PaymentMethod = dr["PaymentMethod"].ToString();
                        expense.Amount = (int)dr["Amount"];
                        expense.Date = (DateTime)dr["Date"];
                        expense.IsRecurring = (bool)dr["IsRecurring"];
                        expense.RecurringFrequency = dr["RecurringFrequency"]?.ToString();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception Caught in GetExpenseById: " + ex.Message);
            }
            return expense;
        }

        public List<Expense> GetExpense()
        {
            List<Expense> expenses = new List<Expense>();
            try
            {
                using (SqlConnection con = new SqlConnection(ConnectionString))
                {
                    string query = "SELECT * FROM Expense";
                    SqlCommand cmd = con.CreateCommand();
                    cmd.CommandText = query;
                    con.Open();
                    SqlDataReader dr = cmd.ExecuteReader();

                    while (dr.Read())
                    {
                        Expense expense = new Expense();
                        expense.ExpenseID = (int)dr["ExpenseID"];
                        expense.UserID = (int)dr["UserID"];
                        expense.Category = dr["Category"].ToString();
                        expense.PaymentMethod = dr["PaymentMethod"].ToString();
                        expense.Amount = (int)dr["Amount"];
                        expense.Date = (DateTime)dr["Date"];
                        expense.IsRecurring = (bool)dr["IsRecurring"];
                        expense.RecurringFrequency = dr["RecurringFrequency"]?.ToString();

                        expenses.Add(expense);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception Caught in GetExpense: " + ex.Message);
            }
            return expenses;
        }

        public void UpdateExpense(Expense expense)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(ConnectionString))
                {
                    string query = "UPDATE Expense SET UserID=@UserID, Category=@Category, PaymentMethod=@PaymentMethod, Amount=@Amount, Date=@Date,IsRecurring=@IsRecurring, RecurringFrequency=@RecurringFrequency WHERE ExpenseID=@ExpenseID";
                    SqlCommand cmd = new SqlCommand(query, con);
                    cmd.Parameters.AddWithValue("@ExpenseID", expense.ExpenseID);
                    cmd.Parameters.AddWithValue("@UserID", expense.UserID);
                    cmd.Parameters.AddWithValue("@Category", expense.Category);
                    cmd.Parameters.AddWithValue("@PaymentMethod", expense.PaymentMethod);
                    cmd.Parameters.AddWithValue("@Amount", expense.Amount);
                    cmd.Parameters.AddWithValue("@Date", expense.Date);
                    cmd.Parameters.AddWithValue("@IsRecurring", expense.IsRecurring);
                    cmd.Parameters.AddWithValue("@RecurringFrequency", expense.RecurringFrequency ?? (object)DBNull.Value);
                    con.Open();
                    cmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception Caught in UpdateExpense: " + ex.Message);
            }
        }

        public void DeleteExpense(int id)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(ConnectionString))
                {
                    string deleteExpenseQuery = "DELETE FROM Expense WHERE ExpenseID = @ExpenseID";
                    SqlCommand deleteExpenseCmd = new SqlCommand(deleteExpenseQuery, con);
                    deleteExpenseCmd.Parameters.AddWithValue("@ExpenseID", id);
                    con.Open();
                    deleteExpenseCmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception Caught in DeleteExpense: " + ex.Message);
            }
        }

        public List<Expense> GetExpenseByUserID(int userID)
        {
            List<Expense> expenses = new List<Expense>();
            try
            {
                using (SqlConnection con = new SqlConnection(ConnectionString))
                {
                    string query = "SELECT * FROM Expense WHERE UserID = @UserID";
                    SqlCommand cmd = new SqlCommand(query, con);
                    cmd.Parameters.AddWithValue("@UserID", userID);
                    con.Open();
                    SqlDataReader dr = cmd.ExecuteReader();

                    while (dr.Read())
                    {
                        Expense expense = new Expense();
                        expense.ExpenseID = (int)dr["ExpenseID"];
                        expense.UserID = (int)dr["UserID"];
                        expense.Category = dr["Category"].ToString();
                        expense.PaymentMethod = dr["PaymentMethod"].ToString();
                        expense.Amount = (int)dr["Amount"];
                        expense.Date = (DateTime)dr["Date"];
                        expense.IsRecurring = (bool)dr["IsRecurring"];
                        expense.RecurringFrequency = dr["RecurringFrequency"]?.ToString();

                        expenses.Add(expense);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception Caught in GetExpenseByUserID: " + ex.Message);
            }
            return expenses;
        }
    }
}
