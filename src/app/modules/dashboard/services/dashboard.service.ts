import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { WindFarm } from '../models/windFarm.model';
import { catchError, map } from 'rxjs';
import { Observable, Subject, throwError } from 'rxjs';
import * as _ from 'lodash';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  windFarmsList: WindFarm[] = [];

  private dataSubject = new Subject<WindFarm[]>();
  data$: Observable<WindFarm[]>;
  private _data: WindFarm[] = [];

  public get data(): WindFarm[] {
    return this._data;
  }

  public set data(v: WindFarm[]) {
    this._data = _.cloneDeep(v);
    this.emitDataChange();
  }

  constructor(private http: HttpClient, private _snackBar: MatSnackBar,) {
    this.data$ = this.dataSubject.asObservable();
  }

  emitDataChange() {
    const data = _.cloneDeep(this.data);
    this.dataSubject.next(data);
  }

  list() {
    // List of windfarms from assets/wind-farms-list.json
    return this.http.get<WindFarm[]>('assets/wind-farms-list.json')
      .pipe(
        map((response: WindFarm[]) => {
          this.data = response;
          this.openSnackBar('Wind Farms loaded successfully', 'Close',
            { duration: 2000, panelClass: ['mat-toolbar', 'mat-primary'] });
          this.emitDataChange();
        }),
        catchError(error => {
          this.openSnackBar(error?.message, 'Close',
            { duration: 2000, panelClass: ['mat-toolbar', 'mat-warn'] });
          return throwError(error);
        }),
      );
  }

  editWindFarm(windFarm: WindFarm) {
    const index = this.data.findIndex(item => item.id === windFarm.id);
    if (index !== -1) {
      this.data[index] = windFarm;
      this.emitDataChange();
      this.openSnackBar('Wind Farm edited successfully', 'Close',
        { duration: 2000, panelClass: ['mat-toolbar', 'mat-primary'] });
    }
  }

  openSnackBar(message: string, action: string, config: MatSnackBarConfig) {
    this._snackBar.open(message, action, config);
  }

}
