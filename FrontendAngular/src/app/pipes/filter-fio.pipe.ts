import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
  name: 'filterFIO'
})
export class FilterFIOPipe implements PipeTransform {

  transform(employees: Employee[], filterText : string) {
    if(employees.length === 0 || filterText === ''){
      return employees;
    } else {
      return employees.filter((employee) =>
      {
        let fio = employee.surname.concat(employee.name, employee.patronymic);
        return fio.toLowerCase().includes(filterText.toLowerCase());
      });
    }
  }
}
