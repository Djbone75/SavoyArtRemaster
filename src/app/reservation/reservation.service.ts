import { Injectable } from '@angular/core';

import { Store } from 'src/store';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { reservation } from 'src/models/reservation.model';
@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  currentUser = this.store.value.user;
  constructor(private store: Store, private http: HttpClient) {
    this.getReservation();
  }
  getReservation() {
    return this.http
      .get<{ reservations: reservation[] }>(
        environment.apiUrl + '/reservations/'
      )
      .subscribe((reservations) => {
        this.store.set('reservations', reservations.reservations);
      });
  }

  postUserReservation(reservation: reservation) {
    this.http
      .post<reservation>(
        environment.apiUrl + '/reservations/notregistered',
        reservation
      )
      .subscribe((response) => {
        console.log('reservation effectuée : ', response);
      });
  }
  postReservation(reservation: reservation) {
    this.http
      .post<reservation>(environment.apiUrl + '/reservations/', reservation)
      .subscribe((response) => {
        console.log('reservation effectuée : ', response);
      });
  }
}
