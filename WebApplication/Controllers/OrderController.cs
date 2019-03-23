using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using WebApplication.Data;
using WebApplication.Entities;

namespace WebApplication.Controllers {

    [Route("api/Order")]
    [ApiController]
    public class OrderController : BaseController {

        private readonly IRepository _repository;

        public OrderController(IConfiguration configuration, IRepository repository) : base(configuration) {
            _repository = repository;
        }

        [HttpGet("Test")]
        public string Test() {
            return "Test";
        }

        [HttpGet("{orderId}")]
        public async Task<IActionResult> Get(int orderId) {
            if(orderId < 0) {
                return BadRequest();
            }
            var data = await _repository.GetOrder(orderId);
            if(data == null) {
                return NotFound();
            }
            return Ok(data);
        }

        [HttpGet()]
        public async Task<IActionResult> Get() {
            var data = await _repository.GetOrders();
            if (data == null) {
                return NotFound();
            }
            return Ok(data);
        }


        [HttpPost]
        public async Task<IActionResult> Save([FromBody]Order order) {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (order == null) {
                return BadRequest();
            }

            var result = await _repository.SaveOrder(order);
            if (result > 0) {
                return Created("", order);
            } else {
                return NotFound();
            }
        }




    }
}