import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: any = {
    email: null,
    password: null
  }
  invalidCredentials: boolean = false;
  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.form.email, this.form.password)
    .catch(error => {
      console.log(error)
    });
  }

}
