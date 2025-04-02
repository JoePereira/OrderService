using OrderManagement.Data;
using OrderManagement.Models;

public interface IOrderRepository
{
    Task<Order> CreateOrder(Order order);
    Task<IEnumerable<Order>> GetAllOrders();
    Task<Order?> GetOrderById(Guid id);
}
