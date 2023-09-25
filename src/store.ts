import { Observable, BehaviorSubject, distinctUntilChanged, map } from 'rxjs';

import { user } from './models/user.model';

export interface State {
  user: user | null;
  isAuthenticated: boolean;
  [key: string]: any;
}

const state: State = {
  user: null,
  isAuthenticated: false,
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
