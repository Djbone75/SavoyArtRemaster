import { Component } from '@angular/core';
import { AuthService } from './auth/shared/services/services.service';
import { user } from 'src/models/user.model';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user?: user | null;
  userIsAuthenticated?: boolean = false;

  userListener?: Subscription = this.authService
    .getUserListener()
    .subscribe((user) => {
      this.user = user;
    });

  authListenerSubs = this.authService
    .getAuthStatusListener()
    .subscribe((isAuthenticated) => {
      this.userIsAuthenticated = isAuthenticated;
    });

  constructor(private authService: AuthService) {
    this.authService.AutoauthUser();
  }

  onLogout() {
    console.log('logout 2');
    this.authService.logout();
  }
}
