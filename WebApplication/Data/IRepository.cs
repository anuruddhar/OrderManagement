using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication.Entities;

namespace WebApplication.Data {
    public interface IRepository {
        Task<IEnumerable<Order>> GetOrders();
        Task<Order> GetOrder(int orderId);
        Task<int> SaveOrder(Order order);
    }
}
