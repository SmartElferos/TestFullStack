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
    //api/employees
    [Route("api/employee")]
    [ApiController]
    //[EnableCors(origins: "https://localhost:4200", headers: "*", methods: "*")]
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeeRepo _repository;
        private readonly IMapper _mapper;

        public EmployeesController(IEmployeeRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        //private readonly MockEmployeeRepo _repository = new MockEmployeeRepo();
        //Get api/employee
        [HttpGet]
        public ActionResult <EmployeeReadDto> GetAllEmployees()
        {
            var employeeItems = _repository.GetAllEmployees();

            return Ok(_mapper.Map<IEnumerable<EmployeeReadDto>>(employeeItems));
        }

        //Get api/employee/{id}
        [HttpGet("{id}", Name = "GetEmployeeById")]
        public ActionResult <Employee> GetEmployeeById(int id)
        {
            var employeeItem = _repository.GetEmployeeById(id);
            if (employeeItem != null)
            {
                return Ok(_mapper.Map<EmployeeReadDto>(employeeItem));
            }
            return NotFound();
        }

        //POST api/employee
        [HttpPost]
        public ActionResult <EmployeeReadDto> CreateEmployee(EmployeeCreateDto employeeCreateDto)
        {
            var employeeModel = _mapper.Map<Employee>(employeeCreateDto);
            _repository.CreateEmployee(employeeModel);
            _repository.SaveChanges();

            var employeeReadDto = _mapper.Map<EmployeeReadDto>(employeeModel);

            return CreatedAtRoute(nameof(GetEmployeeById), new {Id = employeeReadDto.Id}, employeeReadDto);
            //return CreatedAtRoute(nameof(GetEmployeeById), 2, employeeReadDto);
            //return Ok(employeeReadDto);
        }

        //PUT api/commands/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateEmployee(int id, EmployeeUpdateDto employeeUpdateDto)
        {
            var employeeModelFromRepo = _repository.GetEmployeeById(id);
            if(employeeModelFromRepo == null)
            {
                return NotFound();
            }

            _mapper.Map(employeeUpdateDto, employeeModelFromRepo);

            _repository.UpdateEmployee(employeeModelFromRepo);

            _repository.SaveChanges();

            return NoContent();
        }

        //DELETE api/commands/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteEmployee(int id)
        {
            var employeeModelFromRepo = _repository.GetEmployeeById(id);
            if(employeeModelFromRepo == null)
            {
                return NotFound();
            }
            _repository.DeleteEmployee(employeeModelFromRepo);
            _repository.SaveChanges();

            return NoContent();
        }
    }
}
