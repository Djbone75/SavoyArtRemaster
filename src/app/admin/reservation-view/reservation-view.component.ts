import { Component } from '@angular/core';
import { reservation } from 'src/models/reservation.model';

import { Store } from 'src/store';

import { ReservationService } from 'src/app/reservation/reservation.service';

@Component({
  selector: 'app-reservation-view',
  templateUrl: './reservation-view.component.html',
  styleUrls: ['./reservation-view.component.scss'],
})
export class ReservationViewComponent {
  reservationList: reservation[] = [];

  reservationListToday: reservation[] = [];

  today: Date = new Date();
  dataSource = this.reservationListToday;
  columnsToDisplay: string[] = [
    'username',
    'day',
    'hour',
    'totalGuests',
    'allergies',
  ];
  constructor(
    private store: Store,
    private reservationService: ReservationService
  ) {
    this.reservationService.getReservation();
  }

  ngOnInit(): void {
    this.store
      .select<reservation[]>('reservations')
      .subscribe((reservations) => {
        this.reservationList = reservations;
        this.reservationListToday = this.reservationList.filter((data) => {
          return (
            new Date(data.day).getMonth() >= this.today.getMonth() &&
            new Date(data.day).getFullYear() >= this.today.getFullYear()
          );
        });

        this.dataSource = this.reservationListToday;
      });
  }
  reservAll() {
    this.dataSource = this.reservationList;
  }
  reservToday() {
    this.dataSource = this.reservationListToday;
  }
}
