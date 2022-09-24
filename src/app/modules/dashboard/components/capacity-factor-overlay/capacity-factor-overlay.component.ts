import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MeterReadings } from '../../models/windFarm.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-capacity-factor-overlay',
  templateUrl: './capacity-factor-overlay.component.html',
  styleUrls: ['./capacity-factor-overlay.component.scss']
})
export class CapacityFactorOverlayComponent implements OnInit {

  displayedColumns: string[] = ['capacityFactor', 'windFarmName', 'activeHours', 'workCapacity', 'totalCapacity'];
  dataSource: MatTableDataSource<MeterReadings>;

  constructor(
    public dialogRef: MatDialogRef<CapacityFactorOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MeterReadings[],
  ) {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
