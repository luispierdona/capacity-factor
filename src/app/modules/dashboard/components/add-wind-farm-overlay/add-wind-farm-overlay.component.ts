import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-add-wind-farm-overlay',
  templateUrl: './add-wind-farm-overlay.component.html',
  styleUrls: ['./add-wind-farm-overlay.component.scss']
})
export class AddWindFarmOverlayComponent implements OnInit, OnDestroy {

  private _unsubscribeAll: Subject<any>;

  addWindFarmForm: FormGroup;
  workCapacityNumbers: number[] = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  constructor(
    public dialogRef: MatDialogRef<AddWindFarmOverlayComponent>,
    private dashboardService: DashboardService,
  ) {
    this._unsubscribeAll = new Subject();

    this.addWindFarmForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      totalCapacity: new FormControl(null, [Validators.required]),
      workCapacity: new FormControl(null, [Validators.required]),
      activeHoursStart: new FormControl(null, [Validators.required]),
      activeHoursEnd: new FormControl(null, [Validators.required]),

    });
  }

  ngOnInit(): void {
  }

  addWindFarm() {
    this.dashboardService.addWindFarm(this.addWindFarmForm.value);
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
