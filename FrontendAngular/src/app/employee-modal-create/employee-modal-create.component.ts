import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { DivisionService } from '../services/division.service';

@Component({
  selector: 'app-employee-modal-create',
  templateUrl: './employee-modal-create.component.html',
  styleUrls: ['./employee-modal-create.component.scss']
})
export class EmployeeModalCreateComponent implements OnInit {

  response !: Employee;
  editEmployee : Employee = {
    id: 0,
    divisionId: 0,
    surname: '',
    name: '',
    patronymic: '',
    wage: 0
  };


  employeeFormCreate = new UntypedFormGroup({
    divisionId: new UntypedFormControl(0, Validators.required),
    surname: new UntypedFormControl('', Validators.required),
    firstname: new UntypedFormControl('', Validators.required),
    patronymic: new UntypedFormControl('', Validators.required),
    dateOfBirth: new UntypedFormControl(''),
    dateOfEmployment: new UntypedFormControl(''),
    wage: new UntypedFormControl(0)
  })

  constructor(private api : ApiService,
              private datePipe: DatePipe,
              private employeeService: EmployeeService,
              public divisionService: DivisionService) { }

  ngOnInit(): void {
  }

  createEmployee(){
    console.log(this.employeeFormCreate);
    if(this.employeeFormCreate.valid) {
      // this.employees.push(this.employeeFormCreate.getRawValue());
      // console.log(this.employeeFormCreate);
      this.editEmployee = {
          id: 0,
          divisionId: parseInt(this.employeeFormCreate.controls['divisionId'].value),
          surname: this.employeeFormCreate.controls['surname'].value,
          name: this.employeeFormCreate.controls['firstname'].value,
          patronymic: this.employeeFormCreate.controls['patronymic'].value,
          dateOfBirth: this.employeeFormCreate.controls['dateOfBirth'].value,
          dateOfEmployment: this.employeeFormCreate.controls['dateOfEmployment'].value,
          wage: this.employeeFormCreate.controls['wage'].value
      }
      console.log(this.editEmployee);
      this.api.addEmployee(this.editEmployee)
      .subscribe({
        next: (employee) => {
          console.log(employee);
          this.employeeService.add(employee);
        },
        error: (response) => {
          console.log(response);
          alert("Успешно сохранено");
        }
      });
      this.employeeFormCreate.reset();
    }
  }
}
