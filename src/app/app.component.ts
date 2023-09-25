import { Component } from '@angular/core';
import { AuthService } from './auth/shared/services/services.service';
import { user } from 'src/models/user.model';

import { Store } from 'src/store';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user?: user | null;
  userIsAuthenticated?: boolean = false;

  userListener?: Subscription = this.store
    .select<user>('user')
    .subscribe((user) => {
      this.user = user;
    });

  authListenerSubs = this.store
    .select<boolean>('isAuthenticated')
    .subscribe((isAuthenticated) => {
      this.userIsAuthenticated = isAuthenticated;
    });

  constructor(private authService: AuthService, private store: Store) {
    this.authService.AutoauthUser();
  }

  onLogout() {
    this.authService.logout();
  }
}
