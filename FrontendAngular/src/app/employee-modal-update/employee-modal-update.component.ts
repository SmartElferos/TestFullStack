import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { ApiService } from '../services/api.service';
import { DivisionService } from '../services/division.service';


@Component({
  selector: 'app-employee-modal-update',
  templateUrl: './employee-modal-update.component.html',
  styleUrls: ['./employee-modal-update.component.scss']
})
export class EmployeeModalUpdateComponent implements OnInit {

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
              public divisionService: DivisionService ) { }

  ngOnInit(): void {
  }

  updateEmployee(){
    console.log(this.employeeFormUpdate);
    if(this.employeeFormUpdate.valid) {
      let editEmployee : Employee = {
          id: this.employee.id,
          divisionId: Number(this.employeeFormUpdate.controls['divisionId'].value),
          surname: this.employeeFormUpdate.controls['surname'].value,
          name: this.employeeFormUpdate.controls['firstname'].value,
          patronymic: this.employeeFormUpdate.controls['patronymic'].value,
          dateOfBirth: this.employeeFormUpdate.controls['dateOfBirth'].value,
          dateOfEmployment: this.employeeFormUpdate.controls['dateOfEmployment'].value,
          wage: this.employeeFormUpdate.controls['wage'].value
      }
      console.log(editEmployee)
      this.api.updateEmployee(editEmployee, this.employee.id)
      .subscribe({
        next: (employees) => {
        },
        error: (response) => {
          console.log(response);
        }
      })
    }
  }

}
