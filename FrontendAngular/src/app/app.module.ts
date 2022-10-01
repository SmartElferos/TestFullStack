import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeModalCreateComponent } from './employee-modal-create/employee-modal-create.component';
import { EmployeeModalUpdateComponent } from './employee-modal-update/employee-modal-update.component';
import { EmployeeModalDeleteComponent } from './employee-modal-delete/employee-modal-delete.component';
import { FilterDateOfBirthPipe } from './pipes/filter-dateofbirth.pipe';
import { FilterDateOfEmploymentPipe } from './pipes/filter-dateofemployment.pipe';
import { FilterWagePipe } from './pipes/filter-wage.pipe';
import { FilterDivisionPipe } from './pipes/filter-division.pipe';
import { FilterFIOPipe } from './pipes/filter-fio.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AboutComponent,
    NavbarComponent,
    EmployeeComponent,
    EmployeeModalCreateComponent,
    EmployeeModalUpdateComponent,
    EmployeeModalDeleteComponent,
    FilterDivisionPipe,
    FilterDateOfBirthPipe,
    FilterDateOfEmploymentPipe,
    FilterWagePipe,
    FilterFIOPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
