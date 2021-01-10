import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatitemComponent } from './patitem.component';

describe('PatitemComponent', () => {
  let component: PatitemComponent;
  let fixture: ComponentFixture<PatitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
