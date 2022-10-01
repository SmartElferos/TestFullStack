import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ApiService } from '../services/api.service';
import { DivisionService } from '../services/division.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-modal-delete',
  templateUrl: './employee-modal-delete.component.html',
  styleUrls: ['./employee-modal-delete.component.scss']
})
export class EmployeeModalDeleteComponent implements OnInit {

  @Input() employee: Employee = {
    id: 0,
    divisionId: 0,
    surname: '',
    name: '',
    patronymic: '',
    wage: 0
  };

  constructor(private api : ApiService,
              public divisionService : DivisionService,
              public employeeService : EmployeeService) { }

  ngOnInit(): void {
  }

  deleteEmployee(employee: Employee) {
    this.api.deleteEmployee(employee.id)
    .subscribe({
      next: (employee) => {
        this.employeeService.delete(this.employee);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  deleteEmployeeTest(employee: Employee) {
        this.employeeService.delete(employee);
  }
}
