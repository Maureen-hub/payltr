using Microsoft.EntityFrameworkCore;
using Payltr.Models;

namespace Payltr.Data
{
    public class PayltrDbContext : DbContext
    {
        public PayltrDbContext(DbContextOptions<PayltrDbContext> options)
            : base(options) { }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // If you only have Users, no additional relationships are needed
            base.OnModelCreating(modelBuilder);
        }
    }
}
