using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestFullstack.Models;

namespace TestFullstack.Data
{
    public class MockEmployeeRepo : IEmployeeRepo
    {
        public Employee GetEmployeeById(int id)
        {
            return new Employee { Id = 0, DivisionId = 1, Surname = "Иванов", Name = "Иван", Patronymic = "Иванович", DateOfBirth = new DateTime(2002, 6, 10), DateOfEmployment = new DateTime(2011, 6, 10), Wage = 100000 };
        }

        public IEnumerable<Employee> GetAllEmployees()
        {
                var employee = new List<Employee>
                {
                    new Employee { Id = 0, DivisionId = 1, Surname = "Иванов", Name = "Иван", Patronymic = "Иванович", DateOfBirth = new DateTime(2002, 6, 10), DateOfEmployment = new DateTime(2011, 6, 10), Wage = 100000 },
                    new Employee { Id = 1, DivisionId = 2, Surname = "Иванов", Name = "Иван", Patronymic = "Иванович", DateOfBirth = new DateTime(2002, 6, 10), DateOfEmployment = new DateTime(2011, 6, 10), Wage = 100000 },
                    new Employee { Id = 2, DivisionId = 3, Surname = "Иванов", Name = "Иван", Patronymic = "Иванович", DateOfBirth = new DateTime(2002, 6, 10), DateOfEmployment = new DateTime(2011, 6, 10), Wage = 100000 },
                    new Employee { Id = 3, DivisionId = 4, Surname = "Иванов", Name = "Иван", Patronymic = "Иванович", DateOfBirth = new DateTime(2002, 6, 10), DateOfEmployment = new DateTime(2011, 6, 10), Wage = 100000 },
                    new Employee { Id = 4, DivisionId = 5, Surname = "Иванов", Name = "Иван", Patronymic = "Иванович", DateOfBirth = new DateTime(2002, 6, 10), DateOfEmployment = new DateTime(2011, 6, 10), Wage = 100000 }
                };

                return employee;
        }

        public Division GetDivisionById(int id)
        {
            return new Division { Id = 0, Name = "Отдел 1"};
        }

        public IEnumerable<Division> GetAllDivisions()
        {
                var employee = new List<Division>
                {
                    new Division { Id = 0, Name = "Отдел 1"},
                    new Division { Id = 1, Name = "Отдел 2"},
                    new Division { Id = 2, Name = "Отдел 3"},
                    new Division { Id = 3, Name = "Отдел 4"},
                    new Division { Id = 4, Name = "Отдел 5"},
                };

                return employee;
        }

        public bool SaveChanges()
        {
            throw new NotImplementedException();
        }

        public void CreateEmployee(Employee employee)
        {
            throw new NotImplementedException();
        }

        public void UpdateEmployee(Employee employee)
        {
            throw new NotImplementedException();
        }

        public void DeleteEmployee(Employee employee)
        {
            throw new NotImplementedException();
        }
    }
}
