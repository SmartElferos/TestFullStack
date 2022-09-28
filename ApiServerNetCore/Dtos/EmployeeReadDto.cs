using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestFullstack.Models;

namespace TestFullstack.Dtos
{
    public class EmployeeReadDto
    {
        public int Id { get; set; }

        public int DivisionId { get; set; }

        //public Division Division { get; set; }

        public string Surname { get; set; }

        public string Name { get; set; }

        public string Patronymic { get; set; }

        public DateTime DateOfBirth { get; set; }

        public DateTime DateOfEmployment { get; set; }

        public float Wage { get; set; }
    }
}
