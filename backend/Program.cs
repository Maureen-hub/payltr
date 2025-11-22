
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Hosting.Server.Features;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Payltr.Data;
using Payltr.Interfaces;
using Payltr.Services;

var builder = WebApplication.CreateBuilder(args);

// EF Core MySQL setup
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<PayltrDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString))
);

// Register services
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.PropertyNamingPolicy = null; // disables camelCase
        options.JsonSerializerOptions.DictionaryKeyPolicy = null;
    });
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Handyman API", Version = "v1" });
});

// **CORS**
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // your Next.js frontend
               .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Handyman API V1");
    });
}

// Apply CORS **before** Authorization
app.UseCors("AllowFrontend");

app.UseMiddleware<ExceptionMiddleware>();
app.UseAuthorization();
app.MapControllers();

// **Check DB connection**
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<PayltrDbContext>();
    try
    {
        if (dbContext.Database.CanConnect())
        {
            Console.WriteLine("✅ Database connected successfully.");
        }
        else
        {
            Console.WriteLine("❌ Database connection failed.");
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"❌ Database connection error: {ex.Message}");
    }
}

// **Display running URLs after host starts**
var lifetime = app.Services.GetRequiredService<IHostApplicationLifetime>();
lifetime.ApplicationStarted.Register(() =>
{
    var serverAddressesFeature = app.Services.GetRequiredService<IServer>()?
        .Features.Get<IServerAddressesFeature>();

    if (serverAddressesFeature != null && serverAddressesFeature.Addresses.Any())
    {
        Console.WriteLine("🚀 Application running on:");
        foreach (var address in serverAddressesFeature.Addresses)
        {
            Console.WriteLine($"   {address}");
        }
    }
    else
    {
        Console.WriteLine("⚠️ No server URLs detected. Check your launch settings or environment variables.");
    }
});

app.Run();