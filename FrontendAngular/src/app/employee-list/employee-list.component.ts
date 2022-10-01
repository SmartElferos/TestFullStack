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
    this.getAllEmployees()
  }

  getAllEmployees(){
    this.api.getAllEmployees()
    .subscribe({
      next: (employees) => {
        this.employeeService.employees = employees;
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
}
