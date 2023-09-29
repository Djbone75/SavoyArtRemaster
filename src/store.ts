import { Observable, BehaviorSubject, distinctUntilChanged, map } from 'rxjs';

import { user } from './models/user.model';
import { opening } from './models/openings.model';
import { Gallery } from './models/gallery.model';
import { reservation } from './models/reservation.model';

import { openingsDefault } from './models/openings.model';
export interface State {
  user: user | null;
  isAuthenticated: boolean;
  token: string | null;
  openings: opening[];
  gallery: Gallery[];
  reservations: reservation[];
  [key: string]: any;
}

const state: State = {
  user: null,
  isAuthenticated: false,
  token: null,
  openings: openingsDefault,
  reservations: [],
  gallery: [],
};

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(map((state) => state[name]));
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }
}
