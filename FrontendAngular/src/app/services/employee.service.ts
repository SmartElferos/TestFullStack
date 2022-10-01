import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];

  getEmployees(){
    return this.employees;
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
