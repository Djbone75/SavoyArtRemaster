import { Component } from '@angular/core';
import { user } from '../../../models/user.model';
import { Store } from 'src/store';

import { allergies } from 'src/models/allergies.array';

import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/services/services.service';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent {
  currentUser: user | null = this.store.value.user;
  allergies = allergies;
  totalGuests: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  constructor(
    private store: Store,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
  onSubmit(form: NgForm) {
    const updatedUser = form.value;
    this.authService.updateUser(updatedUser);
    this.snackBar.open('utilisateur mis à jour', '', { duration: 2000 });

    this.router.navigate(['']);
  }
}
