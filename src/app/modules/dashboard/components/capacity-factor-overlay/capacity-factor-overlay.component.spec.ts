import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CapacityFactorOverlayComponent } from './capacity-factor-overlay.component';

describe('CapacityFactorOverlayComponent', () => {
  let component: CapacityFactorOverlayComponent;
  let fixture: ComponentFixture<CapacityFactorOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatDialogModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        },
      ],
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
