import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWindFarmOverlayComponent } from './add-wind-farm-overlay.component';

describe('AddWindFarmOverlayComponent', () => {
  let component: AddWindFarmOverlayComponent;
  let fixture: ComponentFixture<AddWindFarmOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWindFarmOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWindFarmOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
