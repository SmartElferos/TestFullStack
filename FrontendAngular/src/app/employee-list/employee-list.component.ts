import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ApiService } from '../services/api.service';
import { DivisionService } from '../services/division.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  sortingOrder: boolean = true;

  selectedEmployee: Employee = {
    id: 0,
    divisionId: 0,
    surname: '',
    name: '',
    patronymic: '',
    wage: 0
  };

  filterTextByDivision : string = '';
  filterTextByFIO : string = '';
  filterTextByDateOfBirth : string = '';
  filterTextByDateOfEmployment : string = '';
  filterTextByWage : string = '';

  constructor(private api : ApiService,
              public employeeService: EmployeeService,
              public divisionService: DivisionService) { }

  ngOnInit(): void {
    this.getAllDivisions();
    this.getAllEmployees();
  }

  getAllDivisions(){
    this.api.getAllDivisions().
    subscribe({
      next: (divisions) => {
        this.divisionService.loadDivisions(divisions);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  getAllEmployees(){
    this.api.getAllEmployees()
    .subscribe({
      next: (employees) => {
        this.employeeService.loadEmployees(employees);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  selectEmployee(employee: Employee){
    this.selectedEmployee = employee;
  }

  resetFilter() {
    this.filterTextByDivision = '';
    this.filterTextByFIO = '';
    this.filterTextByDateOfBirth = '';
    this.filterTextByDateOfEmployment = '';
    this.filterTextByWage = '';
  }

  sortData() {
    if (this.sortingOrder) {
      this.employeeService.employees = this.employeeService.getEmployees().sort((a,b) => a.id - b.id);
    } else {
      this.employeeService.employees = this.employeeService.getEmployees().sort((a,b) => b.id - a.id);
    }
    this.sortingOrder = !this.sortingOrder;
  }

  sortName(property) {
    this.sortingOrder = !this.sortingOrder;

    let direction = this.sortingOrder ? 1: -1;

    this.employeeService.employees.sort(function(a,b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      } else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    })
  }
}
