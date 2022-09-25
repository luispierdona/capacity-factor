import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WindFarmCardComponent } from './wind-farm-card.component';

describe('WindFarmCardComponent', () => {
  let component: WindFarmCardComponent;
  let fixture: ComponentFixture<WindFarmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        HttpClientModule,
        MatSnackBarModule,
        MatSelectModule
      ],
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
