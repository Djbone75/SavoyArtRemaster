import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/services/services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public authService: AuthService) {}
  onLogin(form: NgForm) {
    if (form.invalid) {
      console.log('invalid');
      return;
    }
    this.authService.login(form.value.email, form.value.password);
  }
}
