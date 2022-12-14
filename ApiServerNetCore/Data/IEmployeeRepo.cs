using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestFullstack.Models;

namespace TestFullstack.Data
{
    public interface IEmployeeRepo
    {
        bool SaveChanges();

        IEnumerable<Employee> GetAllEmployees();
        Employee GetEmployeeById(int id);
        void CreateEmployee(Employee employee);
        void UpdateEmployee(Employee employee);
        void DeleteEmployee(Employee employee);

        IEnumerable<Division> GetAllDivisions();
        Division GetDivisionById(int id);
    }
}
