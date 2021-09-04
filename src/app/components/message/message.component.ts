import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/models/chat-message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() chatMessage: ChatMessage;
  email: string;
  username: string;
  messageContent: string;
  timeStamp: string
  //isOwnMessage: boolean
  loggedInUserEmail: string;

  constructor( ) {

  }

  ngOnInit() {
    this.messageContent = this.chatMessage.message
    this.timeStamp = this.chatMessage.timeSent
    this.email = this.chatMessage.email
    this.username = this.chatMessage.username    
  }

}
