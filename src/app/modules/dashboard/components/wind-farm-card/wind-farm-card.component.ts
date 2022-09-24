import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WindFarm } from '../../models/windFarm.model';

@Component({
  selector: 'app-wind-farm-card',
  templateUrl: './wind-farm-card.component.html',
  styleUrls: ['./wind-farm-card.component.scss']
})
export class WindFarmCardComponent implements OnInit {

  @Input() windFarm: WindFarm = {};

  workCapacity: FormGroup;
  totalCapacity: number[] = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.workCapacity = this._formBuilder.group({
      totalCapacity: new FormControl(0),
    });
  }

  ngOnInit(): void {
    this.workCapacity.get('totalCapacity')?.setValue(this.windFarm.totalCapacity);
  }

}
