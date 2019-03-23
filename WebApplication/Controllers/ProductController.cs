using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using WebApplication.Data;

namespace WebApplication.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : BaseController {

        private readonly IRepository _repository;

        public ProductController(IConfiguration configuration, IRepository repository ) : base(configuration) {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts() {
            var result = await _repository.GetProducts();
            if(result == null) {
                return NotFound("No data found");
            }
            return Ok(result);
        }

    }
}