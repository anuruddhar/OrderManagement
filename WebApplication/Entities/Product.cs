using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Entities {
    public class Product {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public decimal Price { get; set; }
        public decimal Rating { get; set; }

        public void Load(IDataReader dataReader) {
            Id = int.Parse(dataReader["ID"].ToString());
            Name = dataReader["NAME"].ToString();
            Category = dataReader["CATEGORY"].ToString(); 
            Price = decimal.Parse( dataReader["PRICE"].ToString()); 
            Rating = decimal.Parse( dataReader["RATING"].ToString()); 
        }
    }
}
