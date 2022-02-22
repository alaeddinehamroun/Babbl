import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user.model';
import { ChatService } from 'src/app/services/chat.service';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']

})
export class SidebarComponent implements OnInit {

  @Input() isActive!: boolean;
  @Input() user: IUser;
  users: any[];
  searchResult: any[];
  search: boolean = false;
  constructor(private router: Router, public toggleService: ToggleService, private chatService:ChatService) {
  }

  ngOnInit() {
    this.chatService.getOnlineUsers().valueChanges().subscribe(users => {
      this.users = users;
      this.users.forEach((value, index) => {
        if(value.email === this.user.email)
          this.users.splice(index, 1)
      })
    });
  }

  selectUser(selectedUser: any) {
    this.router.navigate(['/chatroom',selectedUser.displayName])
  }
  sendData(event: any) {
    if(event.target.value)
      this.search = true;
    else
      this.search = false;
    this.chatService.searchUsers(event.target.value).valueChanges().subscribe(users => {
      this.searchResult = users;
    })
  }

}
