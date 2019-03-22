using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Entities {
    public class OrderItem {
        public int Id { get; set; }
        public Product Product { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public Order Order { get; set; }

        public void Load(IDataReader dataReader) {
            this.Id = Int16.Parse(dataReader["ID"].ToString());
            this.Quantity = Int16.Parse(dataReader["QUANTITY"].ToString());
            this.UnitPrice = decimal.Parse(dataReader["UNIT_PRICE"].ToString());
        }

    }
}
