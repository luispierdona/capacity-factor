import { Component, OnInit } from '@angular/core';
import { WindFarm } from '../../models/windFarm.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  gridColumns = 4;
  windFarms: WindFarm[] = [
    {
      id: '1',
      name: 'Wind Farm 1',
      activeHoursStart: new Date('2020-01-01T00:00:00'),
      activeHoursEnd: new Date('2020-01-01T23:59:59'),
      totalCapacity: 100,
      meterReadings: 100
    },
    {
      id: '2',
      name: 'Wind Farm 2',
      activeHoursStart: new Date('2020-01-01T00:00:00'),
      activeHoursEnd: new Date('2020-01-01T23:59:59'),
      totalCapacity: 100,
      meterReadings: 100
    },
    {
      id: '2',
      name: 'Wind Farm 2',
      activeHoursStart: new Date('2020-01-01T00:00:00'),
      activeHoursEnd: new Date('2020-01-01T23:59:59'),
      totalCapacity: 100,
      meterReadings: 100
    },
    {
      id: '2',
      name: 'Wind Farm 2',
      activeHoursStart: new Date('2020-01-01T00:00:00'),
      activeHoursEnd: new Date('2020-01-01T23:59:59'),
      totalCapacity: 100,
      meterReadings: 100
    },
    {
      id: '2',
      name: 'Wind Farm 2',
      activeHoursStart: new Date('2020-01-01T00:00:00'),
      activeHoursEnd: new Date('2020-01-01T23:59:59'),
      totalCapacity: 100,
      meterReadings: 100
    },
    {
      id: '2',
      name: 'Wind Farm 2',
      activeHoursStart: new Date('2020-01-01T00:00:00'),
      activeHoursEnd: new Date('2020-01-01T23:59:59'),
      totalCapacity: 100,
      meterReadings: 100
    },
    {
      id: '2',
      name: 'Wind Farm 2',
      activeHoursStart: new Date('2020-01-01T00:00:00'),
      activeHoursEnd: new Date('2020-01-01T23:59:59'),
      totalCapacity: 100,
      meterReadings: 100
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
