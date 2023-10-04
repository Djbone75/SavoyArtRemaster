import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationComponent } from './reservation.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [ReservationComponent],
  imports: [
    CommonModule,

    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatNativeDateModule,
  ],
})
export class ReservationModule {}
