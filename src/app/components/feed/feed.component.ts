import { Component, OnChanges, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed!: any;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.feed = this.chatService.getMessages().valueChanges();
  }
  ngOnChanges() {
    this.feed = this.chatService.getMessages().valueChanges();
  }

}
