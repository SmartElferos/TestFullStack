import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Division } from '../models/division.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  baseApiUrl: string = environment.baseApiUrl;

  getAllEmployees(): Observable<Employee[]>{
    // console.log(this.baseApiUrl + '/api/employee');
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employee');
  }

  getEmployeeById(id: number): Observable<Employee>{
    // console.log(this.baseApiUrl + '/api/employee/'+id);
    return this.http.get<Employee>(this.baseApiUrl + '/api/employee/'+id);
  }

  deleteEmployee(id: number): Observable<Employee>{
    // console.log(this.baseApiUrl + '/api/employee/'+id);
    return this.http.delete<Employee>(this.baseApiUrl + '/api/employee/'+id);
  }

  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseApiUrl + '/api/employee', addEmployeeRequest);
  }

  updateEmployee(addEmployeeRequest: Employee, id: number): Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + '/api/employee/'+id, addEmployeeRequest);
  }

  getAllDivisions(): Observable<Division[]> {
    return this.http.get<Division[]>(this.baseApiUrl + '/api/division');
  }

  getDivisionById(id: number): Observable<Division>{
    return this.http.get<Division>(this.baseApiUrl + '/api/employee/'+id);
  }
}
