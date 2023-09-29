import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeningUpdateComponent } from './opening-update.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { AdminGuard } from 'src/app/auth/admin.guard';

export const routes: Routes = [
  { path: '', canActivate: [AdminGuard], component: OpeningUpdateComponent },
];

@NgModule({
  declarations: [OpeningUpdateComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
  ],
})
export class OpeningUpdateModule {}
