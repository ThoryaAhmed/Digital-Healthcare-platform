import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatviewComponent } from './patview.component';

describe('PatviewComponent', () => {
  let component: PatviewComponent;
  let fixture: ComponentFixture<PatviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
