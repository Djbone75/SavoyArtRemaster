import { Component } from '@angular/core';
import { OpeningsService } from 'src/app/openings/openings.service';
import { opening } from 'src/models/openings.model';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

import { Store } from 'src/store';

@Component({
  selector: 'app-opening-update',
  templateUrl: './opening-update.component.html',
  styleUrls: ['./opening-update.component.scss'],
})
export class OpeningUpdateComponent {
  jours: string[] = [
    'lundi',
    'mardi',
    'mercredi',
    'jeudi',
    'vendredi',
    'samedi',
    'dimanche',
  ];
  hoursAM: number[] = [11, 12, 13, 14, 15, 16, 17];
  hoursPM: number[] = [0, 18, 19, 20, 21, 22, 23];
  minutes: number[] = [0, 15, 30, 45];

  @ViewChild('f', { static: false }) scheduleForm?: NgForm;

  selectedDay?: opening;
  dayToUpdate?: opening;

  updatedOpening: opening[] = [];
  OpeningSub$ = this.store
    .select<opening[]>('openings')
    .subscribe((openings) => {
      this.updatedOpening = openings;
    });

  selectItem(item: opening) {
    this.selectedDay = item;

    this.scheduleForm?.form.patchValue({
      id: null,
      dayName: item.name,
      openOrClose: 'open',
      openHourAM: new Date(item.dayStartAM).getHours(),
      openMinuteAM: new Date(item.dayStartAM).getMinutes(),
      closeHourAM: new Date(item.dayEndAM).getHours(),
      closeMinuteAM: new Date(item.dayEndAM).getMinutes(),
      openHourPM: new Date(item.dayStartPM).getHours(),
      openMinutePM: new Date(item.dayStartPM).getMinutes(),
      closeHourPM: new Date(item.dayEndPM).getHours(),
      closeMinutePM: new Date(item.dayEndPM).getMinutes(),
    });
  }
  onSubmit(form: NgForm): void {
    this.dayToUpdate = {
      name: form.value.dayName,
      dayStartAM: new Date(
        1970,
        1,
        1,
        form.value.openHourAM,
        form.value.openMinuteAM
      ),
      dayEndAM: new Date(
        1970,
        1,
        1,
        form.value.closeHourAM,
        form.value.closeMinuteAM
      ),
      dayStartPM: new Date(
        1970,
        1,
        1,
        form.value.openHourPM,
        form.value.openMinutePM
      ),
      dayEndPM: new Date(
        1970,
        1,
        1,
        form.value.closeHourPM,
        form.value.closeMinutePM
      ),
    };
    this.openingsService.putSchedule(this.dayToUpdate);
  }
  constructor(private openingsService: OpeningsService, private store: Store) {}
}
