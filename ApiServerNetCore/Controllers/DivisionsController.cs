using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestFullstack.Data;
using TestFullstack.Models;

namespace TestFullstack.Controllers
{
    //api/Divisions
    [Route("api/division")]
    [ApiController]
    public class DivisionsController : ControllerBase
    {
        private readonly IDivisionRepo _repository;
        public DivisionsController(IDivisionRepo repository)
        {
            _repository = repository;
        }
        //private readonly MockDivisionRepo _repository = new MockDivisionRepo();
        //Get api/Division
        [HttpGet]
        public ActionResult<IEnumerable<Division>> GetAllDivisions()
        {
            var DivisionItems = _repository.GetDivisions();

            return Ok(DivisionItems);
        }

        //Get api/Division/{id}
        [HttpGet("{id}")]
        public ActionResult<Division> GetDivisionById(int id)
        {
            var DivisionItem = _repository.GetDivisionById(id);

            return Ok(DivisionItem);
        }
    }
}
