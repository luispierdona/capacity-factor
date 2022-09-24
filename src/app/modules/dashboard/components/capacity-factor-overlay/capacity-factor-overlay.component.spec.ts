import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityFactorOverlayComponent } from './capacity-factor-overlay.component';

describe('CapacityFactorOverlayComponent', () => {
  let component: CapacityFactorOverlayComponent;
  let fixture: ComponentFixture<CapacityFactorOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacityFactorOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapacityFactorOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
