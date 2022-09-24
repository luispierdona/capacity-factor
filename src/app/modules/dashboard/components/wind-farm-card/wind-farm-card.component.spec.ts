import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindFarmCardComponent } from './wind-farm-card.component';

describe('WindFarmCardComponent', () => {
  let component: WindFarmCardComponent;
  let fixture: ComponentFixture<WindFarmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindFarmCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindFarmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
