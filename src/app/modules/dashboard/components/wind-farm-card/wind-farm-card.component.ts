import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { WindFarm } from '../../models/windFarm.model';
import { DashboardService } from '../../services/dashboard.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-wind-farm-card',
  templateUrl: './wind-farm-card.component.html',
  styleUrls: ['./wind-farm-card.component.scss']
})
export class WindFarmCardComponent implements OnInit {

  @Input() windFarm: WindFarm = {};

  workCapacity: FormGroup;
  workCapacityNumbers: number[] = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  constructor(
    private _formBuilder: FormBuilder,
    private dashboardService: DashboardService,
  ) {
    this.workCapacity = this._formBuilder.group({
      workCapacity: new FormControl(0),
    });
  }

  ngOnInit(): void {
    this.workCapacity.get('workCapacity')?.setValue(this.windFarm.workCapacity);
  }

  editWindFarm() {
    const windFarm = _.cloneDeep(this.windFarm);
    windFarm.workCapacity = this.workCapacity.get('workCapacity')?.value;

    this.dashboardService.editWindFarm(windFarm);
  }

}
