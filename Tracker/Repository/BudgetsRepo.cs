using System.Data.SqlClient;
using Tracker.Models;
using Tracker.Repository.Interfaces;

namespace Tracker.Repository
{
    public class BudgetsRepo : IBudgetsRepo
    {


        readonly string ConnectionString = "";
        public BudgetsRepo()
        {
            ConnectionString = "Data Source=APINP-ELPTCKU92\\SQLEXPRESS;Initial Catalog=Tracker;Persist Security Info=True;User ID=tap2023;Password=tap2023;Encrypt=False";

        }
        public void CreateBudget(Budgets budgets)
        {

            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string query = "INSERT INTO Budgets ( UserID,Category, BudgetLimit,CurrentSpending) VALUES (@UserID,  @Category, @BudgetLimit,@CurrentSpending)";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@UserID", budgets.UserID);
                cmd.Parameters.AddWithValue("@Category", budgets.Category);
                cmd.Parameters.AddWithValue("@BudgetLimit", budgets.BudgetLimit);
                cmd.Parameters.AddWithValue("@CurrentSpending", budgets.CurrentSpending);
                con.Open();
                cmd.ExecuteNonQuery();
            }
        }

        public List<Budgets> GetBudget()
        {
            List<Budgets> budgets = new List<Budgets>();
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string query = "SELECT * FROM Budgets";
                SqlCommand cmd = con.CreateCommand();
                cmd.CommandText = query;
                con.Open();
                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    Budgets budget = new Budgets();
                    budget.BudgetID = (int)dr["BudgetID"];
                    budget.UserID = (int)dr["UserID"];
                    budget.Category = dr["Category"].ToString();
                    budget.BudgetLimit = (int)dr["BudgetLimit"];
                    budget.CurrentSpending = (int)dr["CurrentSpending"];

                    budgets.Add(budget);
                }
            }
            return budgets;
        }

        public Budgets GetBudgetById(int id)
        {
            Budgets budget = null;
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string query = $"SELECT * FROM Budgets WHERE BudgetID={id}";
                SqlCommand cmd = con.CreateCommand();
                cmd.CommandText = query;
                con.Open();
                SqlDataReader dr = cmd.ExecuteReader();

                if (dr.Read())
                {
                    budget = new Budgets();
                    budget.BudgetID = (int)dr["BudgetID"];
                    budget.UserID = (int)dr["UserID"];
                    budget.Category = dr["Category"].ToString();
                    budget.BudgetLimit = (int)dr["BudgetLimit"];
                    budget.CurrentSpending = (int)dr["CurrentSpending"];
                }
            }
            return budget;
        }


        public void UpdateBudget(Budgets budget)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(ConnectionString))
                {
                    string query = "UPDATE Budgets SET UserID=@UserID, Category=@Category, BudgetLimit=@BudgetLimit, CurrentSpending=@CurrentSpending WHERE BudgetID=@BudgetID";
                    SqlCommand cmd = new SqlCommand(query, con);
                    cmd.Parameters.AddWithValue("@BudgetID", budget.BudgetID);
                    cmd.Parameters.AddWithValue("@UserID", budget.UserID);
                    cmd.Parameters.AddWithValue("@Category", budget.Category);
                    cmd.Parameters.AddWithValue("@BudgetLimit", budget.BudgetLimit);
                    cmd.Parameters.AddWithValue("@CurrentSpending", budget.CurrentSpending);
                    con.Open();
                    cmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception Caught: " + ex.Message);
            }
        }

        public void DeleteBudget(int id)
        {
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string deleteBudgetQuery = "DELETE FROM Budgets WHERE BudgetID = @BudgetID";
                SqlCommand deleteBudgetCmd = new SqlCommand(deleteBudgetQuery, con);
                deleteBudgetCmd.Parameters.AddWithValue("@BudgetID", id);
                con.Open();
                deleteBudgetCmd.ExecuteNonQuery();
            }
        }

        public List<Budgets> GetBudgetByUserID(int userID)
        {
            List<Budgets> budgets = new List<Budgets>();
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string query = "SELECT * FROM Budgets WHERE UserID = @UserID";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@UserID", userID);
                con.Open();
                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    Budgets budget = new Budgets();
                    budget.BudgetID = (int)dr["BudgetID"];
                    budget.UserID = (int)dr["UserID"];
                    budget.Category = dr["Category"].ToString();
                    budget.BudgetLimit = (int)dr["BudgetLimit"];
                    budget.CurrentSpending = (int)dr["CurrentSpending"];

                    budgets.Add(budget);
                }
            }
            return budgets;
        }
    }

    }

