import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [];

  getEmployees(){
    return this.employees;
  }

  add(employee: Employee){
    this.employees.push(employee);
  }

  clear() {
    this.employees = [];
  }

  isEmpty(){
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