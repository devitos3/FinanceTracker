using Tracker.Models;

namespace Tracker.Services.Interfaces
{
    public interface IUsersService
    {
        List<string> GetUsers();
        Users GetUsersById(int id);
        void CreateUser(Users users);

        public Users GetUserByUsername(string username);

    }
}
