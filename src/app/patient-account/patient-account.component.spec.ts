import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAccountComponent } from './patient-account.component';

describe('PatientAccountComponent', () => {
  let component: PatientAccountComponent;
  let fixture: ComponentFixture<PatientAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
