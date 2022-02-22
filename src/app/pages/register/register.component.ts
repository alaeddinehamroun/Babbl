import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
}
  error!: string;

  constructor( private router: Router ,
                private authService: AuthService) { }

  ngOnInit() {
  }
  register() {
    const email = this.form.email;
    const password = this.form.password;
    const username = this.form.username;
    this.authService.signUp(email, password, username)
      .catch((error:any) => {
        this.error = error
        console.log(error)})
  }
}