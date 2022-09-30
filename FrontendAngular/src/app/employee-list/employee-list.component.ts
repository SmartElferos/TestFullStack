import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ApiService } from '../services/api.service';
import { DivisionsService } from '../services/divisions.service';
import { EmployeeService } from '../services/employees.service';

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

  constructor(private api : ApiService,
              public employeeService: EmployeeService,
              public divisionService: DivisionsService) { }

  ngOnInit(): void {
    this.getAllEmployees()
  }

  getAllEmployees(){
    this.api.getAllEmployees()
    .subscribe({
      next: (employees) => {
        this.employeeService.employees = employees;
        // console.log(employees);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  selectEmployee(employee: Employee){
    this.selectedEmployee = employee;
  }

  deleteEmployee(employee: Employee) {
    this.api.deleteEmployee(employee.id).subscribe(response=> {
      this.employeeService.employees = this.employeeService.employees.filter(e => e !== employee)
      // alert("Успешно удалено")
    })
  }
}
