import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { MeterReadings, WindFarm } from '../../models/windFarm.model';
import { DashboardService } from '../../services/dashboard.service';
import { CapacityFactorOverlayComponent } from '../capacity-factor-overlay/capacity-factor-overlay.component';

@Component({
  selector: 'app-calculate-capacity-factor',
  templateUrl: './calculate-capacity-factor.component.html',
  styleUrls: ['./calculate-capacity-factor.component.scss']
})
export class CalculateCapacityFactorComponent implements OnInit, OnDestroy {

  private _unsubscribeAll: Subject<any>;

  capacityFactorForm: FormGroup;
  windFarms: WindFarm[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private dashboardService: DashboardService,
    public dialog: MatDialog,
  ) {
    this._unsubscribeAll = new Subject();

    this.capacityFactorForm = this._formBuilder.group({
      windFarm: new FormControl([], [Validators.required]),
      start: new FormControl<Date | null>(null, [Validators.required]),
      end: new FormControl<Date | null>(null, [Validators.required]),
    });
  }

  /*
    @Description: Calculate the capacity factor of a wind farm

  */
  calculateCapacityFactor() {
    const capacityFactor: MeterReadings[] = [];

    // Days to calculate
    const startDate = new Date(this.capacityFactorForm.get('start')?.value);
    const endDate = new Date(this.capacityFactorForm.get('end')?.value);
    const days = endDate.getDate() - startDate.getDate();

    // Capacity will be equal to the totalCapacity at the workCapacity percentage
    const windFarms = this.capacityFactorForm.get('windFarm')?.value;
    windFarms.forEach((windFarm: WindFarm) => {
      if (windFarm.totalCapacity && windFarm.workCapacity && windFarm.activeHoursStart && windFarm.activeHoursEnd) {
        const workingHours = windFarm.activeHoursEnd - windFarm.activeHoursStart;
        const capacityPerHour = windFarm.totalCapacity * (windFarm.workCapacity / 100);
        capacityFactor.push({
          windFarm: windFarm,
          capacityFactor: (capacityPerHour * workingHours) * days,
        });
      }
    });

    this.openCapacityFactorOverlay(capacityFactor);
  }

  openCapacityFactorOverlay(capacityFactor: MeterReadings[]) {
    this.dialog.open(CapacityFactorOverlayComponent, {
      width: '900px',
      data: capacityFactor,
    });
  }

  ngOnInit(): void {
    this.dashboardService.data$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(data => {
        this.windFarms = data;
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
