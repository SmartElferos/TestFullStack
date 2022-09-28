using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestFullstack.Models;

namespace TestFullstack.Data
{
    public interface IDivisionRepo
    {
        IEnumerable<Division> GetDivisions();
        Division GetDivisionById(int id);
    }
}
