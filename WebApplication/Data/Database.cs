using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Data {
    public static class Database {

        public async static Task<SqlConnection> GetSqlConnection() {
            SqlConnection connection = new SqlConnection(ConnectionString);
            await connection.OpenAsync();
            return connection;
        }


        public static string ConnectionString {
            get {
                SqlConnectionStringBuilder sqlConnectionStringBuilder = new SqlConnectionStringBuilder();
                sqlConnectionStringBuilder.ConnectionString = ConfigCS;
                sqlConnectionStringBuilder.ApplicationName = ApplicationName;
                sqlConnectionStringBuilder.ConnectTimeout = ConnectTimeout;
                return sqlConnectionStringBuilder.ToString();
            }
        }

        public static string ConfigCS { get; set; } = string.Empty;

        public static string ApplicationName { get; set; } = string.Empty;

        public static int ConnectTimeout { get; set; } = 30;
    }
}
