using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TestFullstack.Dtos
{
    public class EmployeeCreateDto
    {
        [Required]
        public int DivisionId { get; set; }

        //public Division Division { get; set; }

        [Required]
        [MaxLength(250)]
        public string Surname { get; set; }

        [Required]
        [MaxLength(250)]
        public string Name { get; set; }

        [Required]
        [MaxLength(250)]
        public string Patronymic { get; set; }

        public DateTime DateOfBirth { get; set; }

        public DateTime DateOfEmployment { get; set; }

        public float Wage { get; set; }
    }
}
