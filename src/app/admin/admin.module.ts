import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { AdminGuard } from '../auth/admin.guard';

export const ROUTES: Routes = [
  {
    path: '',
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'updateOpenings',
      },
      {
        path: 'updateOpenings',
        loadChildren: () =>
          import('./opening-update/opening-update.module').then(
            (m) => m.OpeningUpdateModule
          ),
      },
      {
        path: 'updateGallery',
        loadChildren: () =>
          import('./gallery-update/gallery-update.module').then(
            (m) => m.GalleryUpdateModule
          ),
      },
      {
        path: 'reservationView',
        loadChildren: () =>
          import('./reservation-view/reservation-view.module').then(
            (m) => m.ReservationViewModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(ROUTES)],
})
export class AdminModule {}
