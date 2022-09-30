import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { ApiService } from '../services/api.service';


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
              private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  // loadEmployee(id: any){
  //   this.api.getEmployeeById(id).subscribe(response=> {
  //     this.editEmployee = response;
  //     this.employeeFormUpdate.setValue({
  //       id: this.editEmployee.id,
  //       divisionId: this.editEmployee.divisionId,
  //       surname: this.editEmployee.surname,
  //       firstname: this.editEmployee.name,
  //       patronymic: this.editEmployee.patronymic,
  //       dateOfBirth: this.datePipe.transform(this.editEmployee.dateOfBirth,"yyyy-MM-dd"),
  //       dateOfEmployment: this.datePipe.transform(this.editEmployee.dateOfEmployment,"yyyy-MM-dd"),
  //       wage: this.editEmployee.wage
  //     })
  //   })
  // }

  updateEmployee(){
    console.log(this.employeeFormUpdate);
    if(this.employeeFormUpdate.valid) {
      // this.employees.push(this.employeeFormUpdate.getRawValue());
      // console.log(this.employeeFormUpdate);
      let editEmployee : Employee = {
          id: this.employee.id,
          divisionId: this.employeeFormUpdate.controls['divisionId'].value,
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
          console.log(employees);
        },
        error: (response) => {
          console.log(response);
        }
        // this.employee.push(response);
        //alert("Успешно сохранено")
      })
    }
  }

}
