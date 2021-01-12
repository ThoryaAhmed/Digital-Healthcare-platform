import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorheaderComponent } from './doctorheader.component';

describe('DoctorheaderComponent', () => {
  let component: DoctorheaderComponent;
  let fixture: ComponentFixture<DoctorheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
