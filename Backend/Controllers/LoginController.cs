using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Microsoft.VisualStudio.Services.Users;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Tracker.Models;
using Tracker.Repository;

namespace Tracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IConfiguration _config;

        public LoginController(IConfiguration configuration)
        {
            _config = configuration;
        }

        private string HashPassword(string password)
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
                return BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();
            }
        }

        private IActionResult AuthenticateUser(Login login)
        {
            UsersRepo usersRepo = new UsersRepo();
            var user = usersRepo.GetUserByUsername(login.Username);
            if (user != null)
            {
                string hashedInputPassword = HashPassword(login.Password);
                string storedHashedPassword = HashPassword(user.PasswordHash); // Assuming user.Password is the stored hashed password

                if (hashedInputPassword == storedHashedPassword)
                {
                    return Ok(); // User authenticated successfully
                }
                else
                {
                    return Unauthorized("Invalid password");
                }
            }
            else
            {
                return NotFound("User not found");
            }
        }

        private string GenerateToken(Login login)
        {
            UsersRepo usersRepo = new UsersRepo();
            var user = usersRepo.GetUserByUsername(login.Username);
            if (user != null)
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_config["Jwt:Key"]);

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                         new Claim(ClaimTypes.Name, user.UserName),
                         new Claim(ClaimTypes.Email, user.Email),
                         new Claim("UserID", user.UserID.ToString())
                        // Add additional claims as needed
                    }),
                    Expires = DateTime.UtcNow.AddDays(7),
                    Issuer = _config["Jwt:Issuer"],
                    Audience = _config["Jwt:Audience"],
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };

                var token = tokenHandler.CreateToken(tokenDescriptor);
                return tokenHandler.WriteToken(token);
            }
            return null;
        }


        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login(Login login)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IActionResult response = Unauthorized();
            var loginResult = AuthenticateUser(login);
            if (loginResult is OkResult)
            {
                UsersRepo usersRepo = new UsersRepo();
                var user = usersRepo.GetUserByUsername(login.Username);
                var token = GenerateToken(login);
                if (token != null)
                {
                    response = Ok(new { token, user });
                }
                else
                {
                    response = Unauthorized();
                }
            }
            else
            {
                response = loginResult;
            }
            return response;
        }

    }
}