using Aknur_Back.Context;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Aknur_Back.Data
{
    public class DataSeeder
    {
        private readonly AppDbContext dbContext;

        public DataSeeder(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task SeedData()
        {
            await dbContext.Database.MigrateAsync();
        }

    }

    public struct Test : Test1
    {
        public void Mak()
        {
            throw new System.NotImplementedException();
        }
    }
    public interface Test1
    {
        void Mak();
    }
}
