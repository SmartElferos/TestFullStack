import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
  name: 'filterWage'
})
export class FilterWagePipe implements PipeTransform {

  transform(employees: Employee[], filterText : string) {
    if(employees.length === 0 || filterText === ''){
      return employees;
    } else {
      return employees.filter((employee) =>
      {
        return employee.wage < Number(filterText);
      });
    }
  }

}
