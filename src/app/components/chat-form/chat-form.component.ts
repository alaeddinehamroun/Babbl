import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  message!: string;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }
  send() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
  handleSubmit(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.send();
    }
  }
}
