using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Entities {
    public class Order {

        public int Id { get; set; }
        //[Required(ErrorMessage = "OrderDate is Required")]
        public DateTime OrderDate { get; set; }
        //[Required(ErrorMessage = "OrderNumber is Required"), MaxLength(10)]
        public string OrderNumber { get; set; }
        public RecordStatus RecordStatus { get; set; }
        public List<OrderItem> Items { get; set; } = new List<OrderItem>();

        public void Load(IDataReader dataReader) {
            Id = Int32.Parse(dataReader["ID"].ToString());
            OrderDate = Convert.ToDateTime(dataReader["ORDER_DATE"]);
            OrderNumber = dataReader["ORDER_NUMBER"].ToString();
        }
    }
}
