import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[] = [];

  editEmployee !: Employee;

  employeeForm = new UntypedFormGroup({
    divisionId: new UntypedFormControl(0, Validators.required),
    surname: new UntypedFormControl('', Validators.required),
    firstname: new UntypedFormControl('', Validators.required),
    patronymic: new UntypedFormControl('', Validators.required),
    dateOfBirth: new UntypedFormControl(''),
    dateOfEmployment: new UntypedFormControl(''),
    wage: new UntypedFormControl(0)
  })
  constructor(private formbuilder : UntypedFormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.getAllEmployees()
  }

  getAllEmployees(){
    this.api.getAllEmployees()
    .subscribe({
      next: (employees) => {
        this.employees = employees;
        console.log(employees);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  saveEmployee(){
    console.log(this.employeeForm);
    if(this.employeeForm.valid) {
      // this.employees.push(this.employeeForm.getRawValue());
      console.log(this.employeeForm);
      let editEmployee : Employee = {
          id: 0,
          divisionId: this.employeeForm.controls['divisionId'].value,
          surname: this.employeeForm.controls['surname'].value,
          name: this.employeeForm.controls['firstname'].value,
          patronymic: this.employeeForm.controls['patronymic'].value,
          dateOfBirth: this.employeeForm.controls['dateOfBirth'].value,
          dateOfEmployment: this.employeeForm.controls['dateOfEmployment'].value,
          wage: this.employeeForm.controls['wage'].value
      }
      console.log(editEmployee)
      this.api.addEmployee(editEmployee)
      .subscribe(response=> {
        this.employees.push(response);
        alert("Успешно сохранено: " + response)
      })
    }
  }

  loadEmployee(id: any){
    this.api.getEmployeeById(id).subscribe(response=> {
      this.editEmployee = response;
      this.employeeForm.setValue({
        divisionId: this.editEmployee.divisionId,
        surname: this.editEmployee.surname,
        firstname: this.editEmployee.name,
        patronymic: this.editEmployee.patronymic,
        dateOfBirth: this.editEmployee.dateOfBirth,
        dateOfEmployment: this.editEmployee.dateOfEmployment,
        wage: this.editEmployee.wage
      })
    })
  }

  deleteEmployee(employee: Employee) {
    this.api.deleteEmployee(employee.id).subscribe(response=> {
      this.employees = this.employees.filter(e => e !== employee)
      alert("Успешно удалено: " + response)
    })
  }
}
