using System;

namespace OrderManagement.Models
{
    public class Order
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Cliente { get; set; }
        public string Produto { get; set; }
        public decimal Valor { get; set; }
        public string Status { get; set; } = "Pendente";
        public DateTime DataCriacao { get; set; } = DateTime.UtcNow;
    }
}
