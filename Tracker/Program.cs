using Tracker.Repository;
using Tracker.Repository.Interfaces;
using Tracker.Services;
using Tracker.Services.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidIssuer = builder.Configuration["Jwt:Audience"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))





        };
    });

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IUsers,UsersRepo>();
builder.Services.AddTransient<IUsersService, UsersService>();
builder.Services.AddScoped<IBudgetsRepo, BudgetsRepo>();
builder.Services.AddTransient<IBudgetsService, BudgetsService>();


builder.Services.AddScoped<IExpenseRepo, ExpenseRepo>();    
builder.Services.AddTransient<IExpenseService, ExpenseService>();
builder.Services.AddScoped<IIncomeRepo, IncomeRepo>();
builder.Services.AddTransient<IIncomeService, IncomeService>(); 
builder.Services.AddScoped<IGoalRepo, GoalRepo>();  
builder.Services.AddTransient<IGoalService, GoalService>();
builder.Services.AddTransient<IUserDataService, UserDataService>();

builder.Services.AddCors((o) =>
{
    o.AddPolicy("corspolicy", b => b.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.UseCors("corspolicy");

app.Run();
