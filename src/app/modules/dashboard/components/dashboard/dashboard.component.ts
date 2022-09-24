import { Component, OnInit } from '@angular/core';
import { WindFarm } from '../../models/windFarm.model';
import { DashboardService } from '../../services/dashboard.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  gridColumns = 4;
  windFarms: WindFarm[] = [];

  constructor(
    private dashboardService: DashboardService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getWindFarms();
  }

  getWindFarms() {
    this.dashboardService.loadWindFarms().subscribe({
      next: (windFarms: WindFarm[]) => {
        this.windFarms = windFarms;
      },
      error: (err) => {
        this.openSnackBar(err?.message, 'Close',
          { duration: 2000, panelClass: ['mat-toolbar', 'mat-warn'] });
      },
      complete: () => this.openSnackBar('Wind Farms loaded successfully', 'Close',
        { duration: 2000, panelClass: ['mat-toolbar', 'mat-primary'] })
    });
  }

  openSnackBar(message: string, action: string, config: MatSnackBarConfig) {
    this._snackBar.open(message, action, config);
  }
}
