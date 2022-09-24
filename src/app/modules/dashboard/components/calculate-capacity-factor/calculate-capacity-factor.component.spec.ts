import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateCapacityFactorComponent } from './calculate-capacity-factor.component';

describe('CalculateCapacityFactorComponent', () => {
  let component: CalculateCapacityFactorComponent;
  let fixture: ComponentFixture<CalculateCapacityFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateCapacityFactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateCapacityFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
