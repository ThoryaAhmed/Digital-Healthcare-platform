import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientheaderComponent } from './patientheader.component';

describe('PatientheaderComponent', () => {
  let component: PatientheaderComponent;
  let fixture: ComponentFixture<PatientheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
