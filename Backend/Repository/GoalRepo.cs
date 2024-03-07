using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Tracker.Models;
using Tracker.Repository.Interfaces;

namespace Tracker.Repository
{
    public class GoalRepo : IGoalRepo
    {
        readonly string ConnectionString = "";
        public GoalRepo()
        {
            ConnectionString = "Data Source=APINP-ELPTCKU92\\SQLEXPRESS;Initial Catalog=Tracker;Persist Security Info=True;User ID=tap2023;Password=tap2023;Encrypt=False";
        }

        public void CreateGoal(Goal goal)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(ConnectionString))
                {
                    string query = "INSERT INTO Goal (UserID, GoalName, GoalStart, GoalComplete, TargetAmount, CurrentAmount) VALUES (@UserID, @GoalName, @GoalStart, @GoalComplete, @TargetAmount, @CurrentAmount)";
                    SqlCommand cmd = new SqlCommand(query, con);
                    cmd.Parameters.AddWithValue("@UserID", goal.UserID);
                    cmd.Parameters.AddWithValue("@GoalName", goal.GoalName);
                    cmd.Parameters.AddWithValue("@GoalStart", goal.GoalStart);
                    cmd.Parameters.AddWithValue("@GoalComplete", goal.GoalComplete);
                    cmd.Parameters.AddWithValue("@TargetAmount", goal.TargetAmount);
                    cmd.Parameters.AddWithValue("@CurrentAmount", goal.CurrentAmount);
                    con.Open();
                    cmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception Caught in CreateGoal: " + ex.Message);
            }
        }

        public Goal GetGoalById(int id)
        {
            Goal goal = null;
            try
            {
                using (SqlConnection con = new SqlConnection(ConnectionString))
                {
                    string query = $"SELECT * FROM Goal WHERE GoalID={id}";
                    SqlCommand cmd = con.CreateCommand();
                    cmd.CommandText = query;
                    con.Open();
                    SqlDataReader dr = cmd.ExecuteReader();

                    if (dr.Read())
                    {
                        goal = new Goal();
                        goal.GoalID = (int)dr["GoalID"];
                        goal.UserID = (int)dr["UserID"];
                        goal.GoalName = dr["GoalName"].ToString();
                        goal.GoalStart = (DateTime)dr["GoalStart"];
                        goal.GoalComplete = (DateTime)dr["GoalComplete"];
                        goal.TargetAmount = (int)dr["TargetAmount"];
                        goal.CurrentAmount = (int)dr["CurrentAmount"];
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception Caught in GetGoalById: " + ex.Message);
            }
            return goal;
        }

        public List<Goal> GetGoals()
        {
            List<Goal> goals = new List<Goal>();
            try
            {
                using (SqlConnection con = new SqlConnection(ConnectionString))
                {
                    string query = "SELECT * FROM Goal";
                    SqlCommand cmd = con.CreateCommand();
                    cmd.CommandText = query;
                    con.Open();
                    SqlDataReader dr = cmd.ExecuteReader();

                    while (dr.Read())
                    {
                        Goal goal = new Goal();
                        goal.GoalID = (int)dr["GoalID"];
                        goal.UserID = (int)dr["UserID"];
                        goal.GoalName = dr["GoalName"].ToString();
                        goal.GoalStart = (DateTime)dr["GoalStart"];
                        goal.GoalComplete = (DateTime)dr["GoalComplete"];
                        goal.TargetAmount = (int)dr["TargetAmount"];
                        goal.CurrentAmount = (int)dr["CurrentAmount"];

                        goals.Add(goal);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception Caught in GetGoals: " + ex.Message);
            }
            return goals;
        }

        public void UpdateGoal(Goal goal)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(ConnectionString))
                {
                    string query = "UPDATE Goal SET UserID=@UserID, GoalName=@GoalName, GoalStart=@GoalStart, GoalComplete=@GoalComplete, TargetAmount=@TargetAmount, CurrentAmount=@CurrentAmount WHERE GoalID=@GoalID";
                    SqlCommand cmd = new SqlCommand(query, con);
                    cmd.Parameters.AddWithValue("@GoalID", goal.GoalID);
                    cmd.Parameters.AddWithValue("@UserID", goal.UserID);
                    cmd.Parameters.AddWithValue("@GoalName", goal.GoalName);
                    cmd.Parameters.AddWithValue("@GoalStart", goal.GoalStart);
                    cmd.Parameters.AddWithValue("@GoalComplete", goal.GoalComplete.HasValue ? (object)goal.GoalComplete.Value : DBNull.Value);
                    cmd.Parameters.AddWithValue("@TargetAmount", goal.TargetAmount);
                    cmd.Parameters.AddWithValue("@CurrentAmount", goal.CurrentAmount);
                    con.Open();
                    cmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception Caught in UpdateGoal: " + ex.Message);
            }
        }

        public void DeleteGoal(int id)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(ConnectionString))
                {
                    string deleteGoalQuery = "DELETE FROM Goal WHERE GoalID = @GoalID";
                    SqlCommand deleteGoalCmd = new SqlCommand(deleteGoalQuery, con);
                    deleteGoalCmd.Parameters.AddWithValue("@GoalID", id);
                    con.Open();
                    deleteGoalCmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception Caught in DeleteGoal: " + ex.Message);
            }
        }

        public List<Goal> GetGoalsByUserId(int userId)
        {
            List<Goal> goals = new List<Goal>();
            try
            {
                using (SqlConnection con = new SqlConnection(ConnectionString))
                {
                    string query = "SELECT * FROM Goal WHERE UserID = @UserID";
                    SqlCommand cmd = new SqlCommand(query, con);
                    cmd.Parameters.AddWithValue("@UserID", userId);
                    con.Open();
                    SqlDataReader dr = cmd.ExecuteReader();

                    while (dr.Read())
                    {
                        Goal goal = new Goal();
                        goal.GoalID = (int)dr["GoalID"];
                        goal.UserID = (int)dr["UserID"];
                        goal.GoalName = dr["GoalName"].ToString();
                        goal.GoalStart = (DateTime)dr["GoalStart"];
                        goal.GoalComplete = (DateTime)dr["GoalComplete"];
                        goal.TargetAmount = (int)dr["TargetAmount"];
                        goal.CurrentAmount = (int)dr["CurrentAmount"];

                        goals.Add(goal);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception Caught in GetGoalsByUserId: " + ex.Message);
            }
            return goals;
        }
    }
}
