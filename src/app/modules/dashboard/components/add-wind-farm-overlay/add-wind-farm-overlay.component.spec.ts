import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddWindFarmOverlayComponent } from './add-wind-farm-overlay.component';

describe('AddWindFarmOverlayComponent', () => {
  let component: AddWindFarmOverlayComponent;
  let fixture: ComponentFixture<AddWindFarmOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
        HttpClientModule,
        MatSnackBarModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
      ],
      declarations: [AddWindFarmOverlayComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddWindFarmOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark id as invalid when it has no value', () => {
    const id = component.addWindFarmForm.controls['id'];
    expect(id.valid).toBeFalsy();
  });

  it('should mark id as valid when it has a value', () => {
    const id = component.addWindFarmForm.controls['id'];
    id.setValue('123');
    expect(id.valid).toBeTruthy();
  });

  it('should mark activeHoursStart as invalid when its value is longer that number 23', () => {
    const activeHoursStart = component.addWindFarmForm.controls['activeHoursStart'];
    activeHoursStart.setValue(24);
    expect(activeHoursStart.valid).toBeFalsy();
  });

  it('check the length of drop down', async () => {
    const trigger = fixture.debugElement.query(By.css('.mat-select-trigger')).nativeElement;
    trigger.click();
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      const inquiryOptions = fixture.debugElement.queryAll(By.css('.mat-option-text'));
      expect(inquiryOptions.length).toEqual(11);
    });
  });

  it('should display correct numbers on the dropdown options for workCapacity', async () => {
    const trigger = fixture.debugElement.query(By.css('.mat-select-trigger')).nativeElement;
    trigger.click();
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      const inquiryOptions = fixture.debugElement.queryAll(By.css('.mat-option-text'));
      expect(inquiryOptions[0].nativeElement.innerText).toEqual('0%');
      expect(inquiryOptions[1].nativeElement.innerText).toEqual('10%');
      expect(inquiryOptions[2].nativeElement.innerText).toEqual('20%');
      expect(inquiryOptions[3].nativeElement.innerText).toEqual('30%');
      expect(inquiryOptions[4].nativeElement.innerText).toEqual('40%');
      expect(inquiryOptions[5].nativeElement.innerText).toEqual('50%');
      expect(inquiryOptions[6].nativeElement.innerText).toEqual('60%');
      expect(inquiryOptions[7].nativeElement.innerText).toEqual('70%');
      expect(inquiryOptions[8].nativeElement.innerText).toEqual('80%');
      expect(inquiryOptions[9].nativeElement.innerText).toEqual('90%');
      expect(inquiryOptions[10].nativeElement.innerText).toEqual('100%');
    });
  });

});
