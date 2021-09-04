import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor( private router: Router ) { }

  ngOnInit() {
    if(true)
    this.router.navigate(['chatroom'])
  }
  register() {
    console.log("register")
  }
}
