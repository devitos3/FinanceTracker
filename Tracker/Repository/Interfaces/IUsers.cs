using Tracker.Models;

namespace Tracker.Repository.Interfaces
{
    public interface IUsers
    {
        public List<string> GetUsers();
        Users GetUsersById(int id);

        public Users GetUserByUsername(string username);

        void CreateUser(Users users);

    }
}
