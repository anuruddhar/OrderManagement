using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using WebApplication.Data;

namespace WebApplication.Controllers {

    [ApiController]
    public abstract class BaseController : ControllerBase {
        private readonly IConfiguration _configuration;

        public BaseController(IConfiguration configuration) {
            _configuration = configuration;
            Database.ConfigCS = configuration.GetConnectionString("Connection");
        }
    }
}