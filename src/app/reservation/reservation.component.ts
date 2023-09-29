import { Component } from '@angular/core';

import { allergies } from 'src/models/allergies.array';

import { reservation } from 'src/models/reservation.model';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Store } from 'src/store';

import { ReservationService } from './reservation.service';

import { FormsModule, NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent {
  constructor(
    private reservationService: ReservationService,
    private store: Store,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.today = new Date();
    this.twoWeeks = new Date();
    this.twoWeeks.setDate(this.twoWeeks.getDate() + 14);
    this.store.select<reservation[]>('reservations').subscribe((data) => {
      this.reservations = data;
    });
  }
  allergies: string[] = allergies;

  hour: number = 0;
  today: Date;
  twoWeeks: Date;
  currentUser = this.store.value.user;
  reservations: Array<reservation> = [];
  @ViewChild('f', { static: false }) reservationForm?: NgForm;
  newDate?: Date;
  customDate: Date = new Date();
  customReservationAM: number = 20;
  customReservationPM: number = 20;
  theForm?: NgForm;
  totalGuests: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  hours: number[] = [11, 12, 13, 18, 19, 20, 21];
  minutes: number[] = [0, 15, 30, 45];
  date?: Date = new Date();

  onChange(customDate: Date) {
    let reservAM = this.reservations
      .filter((data) => {
        return new Date(data.day).getDate() === customDate.getDate();
      })
      .filter((customdates) => {
        return new Date(customdates.hour).getHours() <= 15;
      });

    if (reservAM.length > 0) {
      this.customReservationAM =
        20 -
        reservAM
          .map((customReservation) => {
            return customReservation.totalGuests;
          })
          .reduce((sum, curr) => {
            return (sum += curr);
          });
    } else {
      this.customReservationAM = 20;
    }
    let reservPM = this.reservations
      .filter((data) => {
        return new Date(data.day).getDate() === customDate.getDate();
      })
      .filter((customdates) => {
        return new Date(customdates.hour).getHours() >= 15;
      });
    if (reservPM.length > 0) {
      this.customReservationPM =
        20 -
        this.reservations
          .filter((data) => {
            return new Date(data.day).getDate() === customDate.getDate();
          })
          .filter((customdates) => {
            return new Date(customdates.hour).getHours() >= 15;
          })
          .map((customReservation) => {
            return customReservation.totalGuests;
          })
          .reduce((sum, curr) => {
            return (sum += curr);
          });
    } else {
      this.customReservationPM = 20;
    }

    this.date = customDate;
  }
  ngOnInit() {
    this.reservationForm?.enabled == false;
  }

  onSubmit(form: NgForm) {
    const newReservation = {
      name: form.value.name || 'aucun nom',
      day: form.value.day || new Date(),
      hour: form.value.hour || new Date(),
      totalGuests: form.value.totalGuests || 1,
      allergies: form.value.allergies || 'aucune allergie',
      username: form.value.username || 'aucun nom',
    };

    newReservation.hour = new Date(
      2022,
      1,
      1,
      form.value.hour,
      form.value.minute
    );
    if (this.currentUser) {
      this.reservationService.postReservation(newReservation);

      this.snackBar.open('reservation effectuée', '', { duration: 1000 });
    } else {
      this.reservationService.postUserReservation(newReservation);
      this.snackBar.open('reservation effectuée', '', { duration: 1000 });
    }
    this.reservations = [...this.reservations, newReservation];
    this.store.set('reservations', this.reservations);
  }
}
