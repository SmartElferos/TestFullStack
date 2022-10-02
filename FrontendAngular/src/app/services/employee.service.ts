import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];

  refreshDateOfBirth(employee: Employee){
    console.log('!!!!');
    const found = this.employees.find(e => e.id = employee.id);
    if(found){
      const index = this.employees.indexOf(found);
      if (index !== -1) {
        this.employees[index].dateOfBirth = employee.dateOfBirth ;
      }
    }
  }

  getEmployees(){
    return this.employees;
  }

  loadEmployees(employees: Employee[]){
    this.employees = employees;
  }

  add(employee: Employee){
    this.employees.push(employee);
  }

  delete(employee: Employee){
    this.employees = this.employees.filter(e => e !== employee)
  }

  clear() {
    this.employees = [];
  }

  isEmployeeEmpty(){
    if (this.employees.length > 0) {
      return true;
    }
    if (this.employees.length <= 0) {
      return false;
    }
    else {
      return false;
    }
  }
  constructor() { }
}
