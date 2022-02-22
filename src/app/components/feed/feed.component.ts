import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, concat, forkJoin, merge, Observable, Subscription, zip } from 'rxjs';
import { flatMap, map, mergeMap, zipAll } from 'rxjs/operators';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  private feedEventSubscription: Subscription;
  @Input() selectedUser: any;
  userObservable: Observable<IUser>

  feed: any[];
  username: string;
  user: any;
  fromto: string;
  _fromto: string;
  @ViewChild('scrollBottom') private scrollBottom: ElementRef;

  constructor(private chatService: ChatService, private authService: AuthService, public router: Router) {

  }


  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.scrollToBottom();

    this.feedEventSubscription = this.authService.authUser.pipe(mergeMap((user) =>
    combineLatest([this.chatService.getMessages(user.displayName, this.selectedUser.username).valueChanges(), this.chatService.getMessages(this.selectedUser.username, user.displayName).valueChanges()]).pipe(map(x => x[0].concat(x[1])))
  )).subscribe(messages => {
    this.feed = messages
    this.feed.sort((a,b) => (Date.parse(a.timeSent)>Date.parse(b.timeSent)) ? 1 : ((Date.parse(b.timeSent)>Date.parse(a.timeSent)) ? -1 :0))
    console.log(this.feed)
  })
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
   }
  scrollToBottom(): void {
    try {
        this.scrollBottom.nativeElement.scrollTop = this.scrollBottom.nativeElement.scrollHeight;
    } catch(err) { }
}



};





