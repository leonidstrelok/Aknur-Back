using Aknur_Back.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Threading.Tasks;

namespace Aknur_Back
{
    static class Program
    {
        public static async Task Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            using var scope = host.Services.CreateScope();
            await MigrateDatabases(scope);
            await host.RunAsync();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
            .ConfigureServices((builder, services) =>
            {
                services.AddScoped<DataSeeder>();
            })
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });

        private static async Task MigrateDatabases(IServiceScope scope)
        {
            DataSeeder dataSeeder = scope.ServiceProvider.GetRequiredService<DataSeeder>();
            await dataSeeder.SeedData();
        }
    }
}
