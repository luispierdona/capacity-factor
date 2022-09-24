import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { meterReadings, WindFarm } from '../../models/windFarm.model';
import { DashboardService } from '../../services/dashboard.service';

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
    console.log(this.capacityFactorForm.value);
    const capacityFactor: meterReadings[] = [];

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

    console.log(capacityFactor);
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
