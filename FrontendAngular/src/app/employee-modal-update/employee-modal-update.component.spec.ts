import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeModalUpdateComponent } from './employee-modal-update.component';

describe('EmployeeModalUpdateComponent', () => {
  let component: EmployeeModalUpdateComponent;
  let fixture: ComponentFixture<EmployeeModalUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeModalUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeModalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
