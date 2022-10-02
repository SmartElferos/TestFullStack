import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { ApiService } from '../services/api.service';
import { DivisionService } from '../services/division.service';
import { DatePicker } from '../models/datepicker.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-modal-update',
  templateUrl: './employee-modal-update.component.html',
  styleUrls: ['./employee-modal-update.component.scss']
})
export class EmployeeModalUpdateComponent implements OnInit {

  datePicker: DatePicker = {
    day: 1,
    month: 1,
    year: 2022
  };

  @Input() employee: Employee = {
    id: 0,
    divisionId: 0,
    surname: '',
    name: '',
    patronymic: '',
    wage: 0
  };

  employeeFormUpdate = new UntypedFormGroup({
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
              public divisionService: DivisionService,
              public employeeService: EmployeeService ) { }

  ngOnInit(): void {
  }

  refreshDateOfBirth(dateOfBirth: Date) {
    let found = this.employeeService.employees.find(e => e.id === this.employee.id);
    console.log(found);
    if(found){
      found.dateOfBirth = dateOfBirth;
    }
  }

  refreshDateOfEmployment(dateOfEmployment: Date) {
    let found = this.employeeService.employees.find(e => e.id === this.employee.id);
    console.log(found);
    if(found){
      found.dateOfEmployment = dateOfEmployment;
    }
  }

  updateEmployee(){
    // console.log(this.employeeFormUpdate);
    if(this.employeeFormUpdate.valid) {
      let editEmployee : Employee = {
          id: this.employee.id,
          divisionId: Number(this.employeeFormUpdate.controls['divisionId'].value),
          surname: this.employeeFormUpdate.controls['surname'].value,
          name: this.employeeFormUpdate.controls['firstname'].value,
          patronymic: this.employeeFormUpdate.controls['patronymic'].value,
          dateOfBirth: this.employeeFormUpdate.controls['dateOfBirth'].value.split(".").reverse().join("-"),
          dateOfEmployment: this.employeeFormUpdate.controls['dateOfEmployment'].value.split(".").reverse().join("-"),
          wage: this.employeeFormUpdate.controls['wage'].value
      }

      if(editEmployee.dateOfBirth){
        this.refreshDateOfBirth(editEmployee.dateOfBirth);
      }

      if(editEmployee.dateOfEmployment){
        this.refreshDateOfEmployment(editEmployee.dateOfEmployment);
      }

      this.api.updateEmployee(editEmployee, this.employee.id)
      .subscribe({
        next: (employees) => {
        },
        error: (response) => {
          console.log(response);
        }
      });
    }
  }

}
