import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalculateCapacityFactorComponent } from './calculate-capacity-factor.component';

describe('CalculateCapacityFactorComponent', () => {
  let component: CalculateCapacityFactorComponent;
  let fixture: ComponentFixture<CalculateCapacityFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatInputModule,
        HttpClientModule,
        MatSnackBarModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
      ],
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

  it('shoud call addWindFarm method', () => {
    const fixture = TestBed.createComponent(CalculateCapacityFactorComponent);
    const app = fixture.debugElement.componentInstance;
    app.addWindFarm();
    expect(app.addWindFarm).toBeTruthy();
  })

});
