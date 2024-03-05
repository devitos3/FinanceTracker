using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Tracker.Models;
using Tracker.Repository.Interfaces;

namespace Tracker.Repository
{
    public class IncomeRepo : IIncomeRepo
    {
        readonly string ConnectionString = "";
        public IncomeRepo()
        {
            ConnectionString = "Data Source=APINP-ELPTCKU92\\SQLEXPRESS;Initial Catalog=Tracker;Persist Security Info=True;User ID=tap2023;Password=tap2023;Encrypt=False";
        }

        public void CreateIncome(Income income)
        {
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string query = "INSERT INTO Income (UserID, Category, PaymentMethod, Amount, Date, IsRecurring, RecurringFrequency) VALUES (@UserID, @Category, @PaymentMethod, @Amount, @Date, @IsRecurring, @RecurringFrequency)";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@UserID", income.UserID);
                cmd.Parameters.AddWithValue("@Category", income.Category);
                cmd.Parameters.AddWithValue("@PaymentMethod", income.PaymentMethod);
                cmd.Parameters.AddWithValue("@Amount", income.Amount);
                cmd.Parameters.AddWithValue("@Date", income.Date);
                cmd.Parameters.AddWithValue("@IsRecurring", income.IsRecurring);
                cmd.Parameters.AddWithValue("@RecurringFrequency", income.RecurringFrequency ?? (object)DBNull.Value);
                con.Open();
                cmd.ExecuteNonQuery();
            }
        }

        public Income GetIncomeById(int id)
        {
            Income income = null;
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string query = $"SELECT * FROM Income WHERE IncomeID={id}";
                SqlCommand cmd = con.CreateCommand();
                cmd.CommandText = query;
                con.Open();
                SqlDataReader dr = cmd.ExecuteReader();

                if (dr.Read())
                {
                    income = new Income();
                    income.IncomeID = (int)dr["IncomeID"];
                    income.UserID = (int)dr["UserID"];
                    income.Category = dr["Category"].ToString();
                    income.PaymentMethod = dr["PaymentMethod"].ToString();
                    income.Amount = (int)dr["Amount"];
                    income.Date = (DateTime)dr["Date"];
                    income.IsRecurring = (bool)dr["IsRecurring"];
                    income.RecurringFrequency = dr["RecurringFrequency"]?.ToString();
                }
            }
            return income;
        }

        public List<Income> GetIncome()
        {
            List<Income> incomes = new List<Income>();
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string query = "SELECT * FROM Income";
                SqlCommand cmd = con.CreateCommand();
                cmd.CommandText = query;
                con.Open();
                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    Income income = new Income();
                    income.IncomeID = (int)dr["IncomeID"];
                    income.UserID = (int)dr["UserID"];
                    income.Category = dr["Category"].ToString();
                    income.PaymentMethod = dr["PaymentMethod"].ToString();
                    income.Amount = (int)dr["Amount"];
                    income.Date = (DateTime)dr["Date"];
                    income.IsRecurring = (bool)dr["IsRecurring"];
                    income.RecurringFrequency = dr["RecurringFrequency"]?.ToString();

                    incomes.Add(income);
                }
            }
            return incomes;
        }

        public void UpdateIncome(Income income)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(ConnectionString))
                {
                    string query = "UPDATE Income SET UserID=@UserID, Category=@Category, PaymentMethod=@PaymentMethod, Amount=@Amount, Date=@Date,IsRecurring=@IsRecurring, RecurringFrequency=@RecurringFrequency WHERE IncomeID=@IncomeID";
                    SqlCommand cmd = new SqlCommand(query, con);
                    cmd.Parameters.AddWithValue("@IncomeID", income.IncomeID);
                    cmd.Parameters.AddWithValue("@UserID", income.UserID);
                    cmd.Parameters.AddWithValue("@Category", income.Category);
                    cmd.Parameters.AddWithValue("@PaymentMethod", income.PaymentMethod);
                    cmd.Parameters.AddWithValue("@Amount", income.Amount);
                    cmd.Parameters.AddWithValue("@Date", income.Date);
                    cmd.Parameters.AddWithValue("@IsRecurring", income.IsRecurring);
                    cmd.Parameters.AddWithValue("@RecurringFrequency", income.RecurringFrequency);
                    con.Open();
                    cmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception Caught: " + ex.Message);
            }
        }

        public void DeleteIncome(int id)
        {
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string deleteIncomeQuery = "DELETE FROM Income WHERE IncomeID = @IncomeID";
                SqlCommand deleteIncomeCmd = new SqlCommand(deleteIncomeQuery, con);
                deleteIncomeCmd.Parameters.AddWithValue("@IncomeID", id);
                con.Open();
                deleteIncomeCmd.ExecuteNonQuery();
            }
        }

        public List<Income> GetIncomeByUserID(int userID)
        {
            List<Income> incomes = new List<Income>();
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string query = "SELECT * FROM Income WHERE UserID = @UserID";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@UserID", userID);
                con.Open();
                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    Income income = new Income();
                    income.IncomeID = (int)dr["IncomeID"];
                    income.UserID = (int)dr["UserID"];
                    income.Category = dr["Category"].ToString();
                    income.PaymentMethod = dr["PaymentMethod"].ToString();
                    income.Amount = (int)dr["Amount"];
                    income.Date = (DateTime)dr["Date"];
                    income.IsRecurring = (bool)dr["IsRecurring"];
                    income.RecurringFrequency = dr["RecurringFrequency"]?.ToString();

                    incomes.Add(income);
                }
            }
            return incomes;
        }
    }
}
