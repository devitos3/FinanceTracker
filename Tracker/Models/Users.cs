namespace Tracker.Models
{
    public class Users
    {
        public int UserID {  get; set; }    
        public string UserName { get; set; }
        public string Email { get; set; }   
        public string PasswordHash { get; set; }    
    }
}
