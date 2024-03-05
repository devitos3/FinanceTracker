using System.Data.SqlClient;
using System.Net.NetworkInformation;
using Tracker.Models;
using Tracker.Repository.Interfaces;

namespace Tracker.Repository
{
    public class UsersRepo : IUsers
    {
        readonly string ConnectionString = "";
        public UsersRepo()
        {
            ConnectionString = "Data Source=APINP-ELPTCKU92\\SQLEXPRESS;Initial Catalog=Tracker;Persist Security Info=True;User ID=tap2023;Password=tap2023;Encrypt=False";

        }
        public List<string> GetUsers()
        {
            throw new NotImplementedException();
        }

        public Users GetUsersById(int id)
        {
            Users u = null;
            using(SqlConnection con=new SqlConnection(ConnectionString)) 
            {
                string query=$"SELECT * FROM USERS WHERE USERID={id}";
                SqlCommand cmd = con.CreateCommand();
                cmd.CommandText = query;
                con.Open();
                SqlDataReader dr = cmd.ExecuteReader();

                if(dr.Read())
                {
                    u = new Users();
                    u.UserID = (int)dr["UserID"];
                    u.UserName = dr["UserName"].ToString();
                    u.Email = dr["Email"].ToString();
                    u.PasswordHash = dr["PasswordHash"].ToString();
                }
            }
            return u;
        }

        public Users GetUserByUsername(string username)
        {
            Users user = null;
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string query = $"SELECT * FROM USERS WHERE UserName = @Username";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@Username", username);
                con.Open();
                SqlDataReader dr = cmd.ExecuteReader();

                if (dr.Read())
                {
                    user = new Users();
                    user.UserID = (int)dr["UserID"];
                    user.UserName = dr["UserName"].ToString();
                    user.Email = dr["Email"].ToString();
                    user.PasswordHash = dr["PasswordHash"].ToString();
                }
            }
            return user;
        }


        public void CreateUser(Users users)
        {
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string query = "INSERT INTO Users ( Username, Email, PasswordHash) VALUES ( @UserName, @Email, @PasswordHash)";
                SqlCommand cmd = new SqlCommand(query, con);
                //cmd.Parameters.AddWithValue("@UserID", users.UserID);
                cmd.Parameters.AddWithValue("@Username", users.UserName);
                cmd.Parameters.AddWithValue("@Email", users.Email);
                cmd.Parameters.AddWithValue("@PasswordHash", users.PasswordHash);
                con.Open();
                cmd.ExecuteNonQuery();
            }
        }
    }
}
