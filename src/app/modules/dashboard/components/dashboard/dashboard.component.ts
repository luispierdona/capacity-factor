import { Component, OnDestroy, OnInit } from '@angular/core';
import { WindFarm } from '../../models/windFarm.model';
import { DashboardService } from '../../services/dashboard.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private _unsubscribeAll: Subject<any>;

  windFarms: WindFarm[] = [];

  constructor(
    private dashboardService: DashboardService,
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {

    this.dashboardService.data$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(data => {
        this.windFarms = data;
      });
    this.dashboardService.list().subscribe();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
