import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeModalCreateComponent } from './employee-modal-create.component';

describe('EmployeeModalCreateComponent', () => {
  let component: EmployeeModalCreateComponent;
  let fixture: ComponentFixture<EmployeeModalCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeModalCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeModalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
