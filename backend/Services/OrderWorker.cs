using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using OrderManagement.Data;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace OrderManagement.Services
{
    public class OrderWorker : BackgroundService
    {
        private readonly IServiceScopeFactory _scopeFactory;

        public OrderWorker(IServiceScopeFactory scopeFactory)
        {
            _scopeFactory = scopeFactory;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                using (var scope = _scopeFactory.CreateScope())
                {
                    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
                    
                    var pendingOrders = await dbContext.Orders
                        .Where(o => o.Status == "Pendente")
                        .ToListAsync();

                    foreach (var order in pendingOrders)
                    {
                        order.Status = "Processando";
                    }

                    await dbContext.SaveChangesAsync();
                    await Task.Delay(5000, stoppingToken);

                    foreach (var order in pendingOrders)
                    {
                        order.Status = "Finalizado";
                    }

                    await dbContext.SaveChangesAsync();
                }

                await Task.Delay(10000, stoppingToken);
            }
        }
    }
}
