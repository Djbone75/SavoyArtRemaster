import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationViewComponent } from './reservation-view.component';

import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/auth/admin.guard';

import { MatTableModule } from '@angular/material/table';

import { MatButtonModule } from '@angular/material/button';

export const routes: Routes = [
  { path: '', canActivate: [AdminGuard], component: ReservationViewComponent },
];

@NgModule({
  declarations: [ReservationViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatButtonModule,
  ],
})
export class ReservationViewModule {}
