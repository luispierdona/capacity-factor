import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { WindFarm } from '../models/windFarm.model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  windFarmsList: WindFarm[] = [];

  constructor(private http: HttpClient) { }

  // Load wind farms from assets/wind-farms-list.json with a Get request and catch any errors
  loadWindFarms() {
    return this.http.get<WindFarm[]>('assets/wind-farms-list.json')
    .pipe(
      catchError(this.handleError)
    );
  }

  addWindFarm(windFarm: WindFarm) {
    this.windFarmsList.unshift(windFarm);
  }

  getWindFarms(): WindFarm[] {
    return this.windFarmsList;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened, please try again later.'));
  }
}
