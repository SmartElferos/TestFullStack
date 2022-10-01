import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeModalDeleteComponent } from './employee-modal-delete.component';

describe('EmployeeModalDeleteComponent', () => {
  let component: EmployeeModalDeleteComponent;
  let fixture: ComponentFixture<EmployeeModalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeModalDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
