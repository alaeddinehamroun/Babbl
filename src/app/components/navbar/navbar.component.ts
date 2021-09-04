import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user.model';
import { ChatService } from 'src/app/services/chat.service';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user!: IUser;
  constructor(private toggleService: ToggleService,
              private chatService: ChatService,
              private router: Router) {    
  }
  

  ngOnInit(): void {
   
  }

  toggleSidebar() {
    this.toggleService.showSidebar = !this.toggleService.showSidebar;
    console.log(this.toggleService.showSidebar)
  }

  isActive() {
    return this.toggleService.showSidebar
  }

  logout(){

  }


}
