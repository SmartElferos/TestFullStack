import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
  name: 'filterDateOfBirth'
})
export class FilterDateOfBirthPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}
  transform(employees: Employee[], filterText : string) {
    if(employees.length === 0 || filterText === ''){
      return employees;
    } else {
      return employees.filter((employee) =>
      {
        let filterDate = this.datePipe.transform(filterText,"dd-MM-YYYY");
        if(employee.dateOfBirth === undefined) {
          return employee;
        } else {
          return this.datePipe.transform(employee.dateOfBirth,"dd-MM-YYYY") === filterDate;
        }
      });
    }
  }

}
