using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using WebApplication.Entities;

namespace WebApplication.Data {
    public class Repository : IRepository {

        public async Task<Order> GetOrder(int orderId) {
            Order data = new Order();
            using (SqlConnection connection = await Database.GetSqlConnection()) {
                using (SqlCommand command = connection.CreateCommand()) {
                    command.CommandText = "dbo.Ssp_Order_GetOrderByID";
                    command.CommandType = CommandType.StoredProcedure;
                    SqlParameter sqlParameter = new SqlParameter() {
                        ParameterName = "iOrderId",
                        SqlDbType = SqlDbType.Int,
                        Value = orderId
                    };
                    command.Parameters.Add(sqlParameter);
                    IDataReader dataReader = await command.ExecuteReaderAsync(CommandBehavior.CloseConnection);
                    data.Load(dataReader);
                }
            }
            return data;
        }

        public async Task<int> SaveOrder(Order order) {
            int val = 0;
            using (SqlConnection connection = await Database.GetSqlConnection()) {
                using (SqlCommand command = connection.CreateCommand()) {
                    command.CommandText = "dbo.Ssp_Order_SaveOrder";
                    command.CommandType = CommandType.StoredProcedure;
                    SqlParameter sqlParameter = new SqlParameter() {
                        ParameterName = "@vJson",
                        SqlDbType = SqlDbType.NVarChar,
                        Value = JsonConvert.SerializeObject(order)
                    };
                    command.Parameters.Add(sqlParameter);
                    val = await command.ExecuteNonQueryAsync();
                }
            }
            return val;
        }

    }
}
