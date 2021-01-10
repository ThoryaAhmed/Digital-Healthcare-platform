import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatlistComponent } from './patlist.component';

describe('PatlistComponent', () => {
  let component: PatlistComponent;
  let fixture: ComponentFixture<PatlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
