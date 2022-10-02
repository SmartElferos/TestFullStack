using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestFullstack.Data;
using TestFullstack.Dtos;
using TestFullstack.Models;

namespace TestFullstack.Controllers
{
    //api/Divisions
    [Route("api/division")]
    [ApiController]
    public class DivisionsController : ControllerBase
    {
        private readonly IEmployeeRepo _repository;
        private readonly IMapper _mapper;

        public DivisionsController(IEmployeeRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        //Get api/Division/{id}
        [HttpGet("{id}")]
        public ActionResult<Division> GetDivisionById(int id)
        {
            var divisionItem = _repository.GetDivisionById(id);

            return Ok(divisionItem);
        }
        
        //Get api/division
        [HttpGet]
        public ActionResult<DivisionReadDto> GetAllDivisions()
        {
            var divisionItems = _repository.GetAllDivisions();

            return Ok(_mapper.Map<IEnumerable<DivisionReadDto>>(divisionItems));
        }
    }
}
