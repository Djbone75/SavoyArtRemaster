import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { user } from 'src/models/user.model';
import { AuthData } from 'src/models/auth-data.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

import { Store } from 'src/store';

const BACKEND_URL = environment.apiUrl + '/user/';
@Injectable({ providedIn: 'root' })
export class AuthService {
  private token?: string;

  private userData?: string;
  private user?: user | null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private store: Store
  ) {}

  createUser(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    this.http.post(BACKEND_URL + '/register', authData).subscribe(() => {
      this.snackBar.open('merci de vous êtres inscrit', '', {
        duration: 2000,
      });
      this.router.navigate(['/']);
    });
  }

  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };

    try {
      this.http
        .post<{ token: string; user: user }>(BACKEND_URL + 'login', authData)
        .subscribe((response) => {
          const token = response.token;
          const user = response.user;
          this.token = token;
          this.user = user;

          if (token) {
            this.store.set('isAuthenticated', true);
            this.store.set('user', user);
            this.store.set('token', token);

            this.saveAuthData(token, user);
            this.router.navigate(['/']);
          } else {
            this.snackBar.open('utilisateur non trouvé', '', {
              duration: 2000,
            });
            this.router.navigate(['/login']);
          }
        });
    } catch {
      this.snackBar.open('utilisateur non trouvé', '', {
        duration: 2000,
      });
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.store.set('token', null);

    this.store.set('isAuthenticated', false);

    this.store.set('user', null);

    this.clearAuthData();
    this.router.navigate(['/']);
  }

  AutoauthUser() {
    const authInformation = this.getAuthData();

    if (!authInformation?.token) {
      return;
    }
    this.token = authInformation.token;

    this.userData = authInformation.userData;

    this.user = JSON.parse(this.userData);

    this.store.set('isAuthenticated', true);
    this.store.set('user', this.user);
    this.store.set('token', this.token);
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      return;
    }

    return {
      token,
      userData,
    };
  }
  private saveAuthData(token: string, user: user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
  updateUser(updateUser: user) {
    this.http
      .put<{ user: user }>(BACKEND_URL + '/user', updateUser)
      .subscribe((data) => {
        this.user = data.user;
        this.store.set('user', this.user);
      });
  }
}
