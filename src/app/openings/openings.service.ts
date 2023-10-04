import { Injectable } from '@angular/core';
import { Store } from 'src/store';
import { opening } from 'src/models/openings.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { map } from 'rxjs';

const BACKEND_URL = environment.apiUrl + '/horaires/';

@Injectable({
  providedIn: 'root',
})
export class OpeningsService {
  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router
  ) {
    this.getOpening();
  }
  updatedOpenings: opening[] = [];
  OpeningSub$ = this.store
    .select<opening[]>('openings')
    .subscribe((openings) => {
      this.updatedOpenings = openings;
    });

  getOpening() {
    this.http
      .get<{ schedule: any }>(BACKEND_URL)
      .pipe(
        map((scheduleData) => {
          return scheduleData.schedule.map((data: opening) => {
            return {
              name: data.name,
              dayStartAM: data.dayStartAM,
              dayEndAM: data.dayEndAM,
              dayStartPM: data.dayStartPM,
              dayEndPM: data.dayEndPM,
            };
          });
        })
      )
      .subscribe((updatedData) => {
        this.updatedOpenings = updatedData;
        this.store.set('openings', this.updatedOpenings);
      });
  }
  putSchedule(schedule: opening) {
    const scheduleToUpdate = schedule;
    this.http.put(BACKEND_URL, scheduleToUpdate).subscribe((data) => {
      const newSchedule = [...this.updatedOpenings];
      const oldScheduleIndex = newSchedule.findIndex(
        (p) => p.name === scheduleToUpdate.name
      );
      newSchedule[oldScheduleIndex] = scheduleToUpdate;
      this.updatedOpenings = newSchedule;
      this.store.set('openings', this.updatedOpenings);
      this.router.navigate(['/admin/updateOpenings']);
    });
  }
}
