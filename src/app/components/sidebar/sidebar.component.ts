import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { ToggleService } from 'src/app/services/toggle.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
  
})
export class SidebarComponent implements OnInit {
  @Input() isActive!: boolean;

  constructor(private router: Router, public toggleService: ToggleService, public chatService:ChatService) {    
  }

  ngOnInit() {
  }

  selectUser(username: string) {
    this.router.navigate(['/chatroom',username])
  }
  
}
