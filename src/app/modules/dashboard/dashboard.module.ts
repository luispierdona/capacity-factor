import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WindFarmCardComponent } from './components/wind-farm-card/wind-farm-card.component';
import { CalculateCapacityFactorComponent } from './components/calculate-capacity-factor/calculate-capacity-factor.component';
import { CapacityFactorOverlayComponent } from './components/capacity-factor-overlay/capacity-factor-overlay.component';

import { DashboardService } from './services/dashboard.service';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AddWindFarmOverlayComponent } from './components/add-wind-farm-overlay/add-wind-farm-overlay.component';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    MatProgressBarModule,
    MatToolbarModule
  ],
  declarations: [
    DashboardComponent,
    WindFarmCardComponent,
    CalculateCapacityFactorComponent,
    CapacityFactorOverlayComponent,
    AddWindFarmOverlayComponent,
  ],
  exports: [],
  providers: [DashboardService, MatDatepickerModule],
})
export class DashboardPageModule {}
