﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace WebApplication.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class OrderItemController : BaseController {

        public OrderItemController(IConfiguration configuration) : base(configuration) {

        }
    }
}