import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  }
  invalidCredentials: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    if (true)
      this.router.navigate(['chatroom'])
  }

  login() {
    
  }


}
