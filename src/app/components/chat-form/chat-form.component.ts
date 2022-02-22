import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  message!: string;
  @Input() selectedUser: any;
  user: any;

  constructor(private chatService: ChatService, private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.authUser.subscribe((user) => {
      this.user = user
    })
  }

  send() {
    this.chatService.sendMessage(this.message,this.user.displayName + ' > ' + this.selectedUser.username, this.user.email );
    this.message = '';
  }

  handleSubmit(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.send();
    }
  }
}
