import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WindFarmCardComponent } from './components/wind-farm-card/wind-farm-card.component';
import { CalculateCapacityFactorComponent } from './components/calculate-capacity-factor/calculate-capacity-factor.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardService } from './services/dashboard.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,

  ],
  declarations: [
    DashboardComponent,
    WindFarmCardComponent,
    CalculateCapacityFactorComponent
  ],
  exports: [],
  providers: [DashboardService],
})
export class DashboardPageModule {}
