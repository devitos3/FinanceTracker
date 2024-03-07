using Tracker.Models;
using Tracker.Repository.Interfaces;
using Tracker.Services.Interfaces;

namespace Tracker.Services
{
    public class UsersService : IUsersService
    {
        IUsers _UsersRepo;
        public UsersService(IUsers usersrepo)
        {
            _UsersRepo=usersrepo;
        }
        public List<string> GetUsers()
        {
            throw new NotImplementedException();
        }

        public Users GetUsersById(int id)
        {
          return _UsersRepo.GetUsersById(id);
        }

        public Users GetUserByUsername(string username)
        {
            return _UsersRepo.GetUserByUsername(username);  
        }

        public void CreateUser(Users users)
        {
            _UsersRepo.CreateUser(users);
        }
    }
}
