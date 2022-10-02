using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestFullstack.Models;

namespace TestFullstack.Data
{
    public class SqlEmployeeRepo : IEmployeeRepo
    {
        private readonly EmployeeDBContext _context;

        public Division GetDivisionById(int id)
        {
            return _context.Divisions.FirstOrDefault(p => p.Id == id);
        }

        public IEnumerable<Division> GetAllDivisions()
        {
            return _context.Divisions.ToList();
        }

        public SqlEmployeeRepo(EmployeeDBContext context)
        {
            _context = context;
        }

        public void CreateEmployee(Employee employee)
        {
            if(employee == null)
            {
                throw new ArgumentNullException(nameof(employee));
            }

            _context.Employees.Add(employee);
        }

        public void DeleteEmployee(Employee employee)
        {
            if(employee == null)
            {
                throw new ArgumentNullException(nameof(employee));
            }
            _context.Employees.Remove(employee);
        }

        public IEnumerable<Employee> GetAllEmployees()
        {
            return _context.Employees.ToList();
        }

        public Employee GetEmployeeById(int id)
        {
            return _context.Employees.FirstOrDefault(p => p.Id == id);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void UpdateEmployee(Employee employee)
        {
            //Nothing
        }
    }
}
