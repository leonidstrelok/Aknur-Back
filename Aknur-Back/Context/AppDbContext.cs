using Aknur_Back.Models;
using Microsoft.EntityFrameworkCore;

namespace Aknur_Back.Context
{
    public class AppDbContext : DbContext
    {
        public DbSet<Dealer> Dealers { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }
        public DbSet<Mailing> Mailings { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
            base.OnModelCreating(modelBuilder);
        }
    }
}
