import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, concat, forkJoin, merge, Observable, Subscription, zip } from 'rxjs';
import { flatMap, map, mergeMap } from 'rxjs/operators';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnDestroy {
  private feedEventSubscription: Subscription;
  @Input() selectedUser: any;
  userObservable: Observable<IUser>

  feed: any[];
  username: string;
  user: any;
  fromto: string;
  _fromto: string;
  constructor(private chatService: ChatService, private authService: AuthService, public router: Router) {
  }


  ngOnInit(): void {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.feedEventSubscription = this.authService.authUser.pipe(mergeMap((user) =>
      zip(this.chatService.getMessages(user.displayName, this.selectedUser.username).valueChanges(), this.chatService.getMessages(this.selectedUser.username, user.displayName).valueChanges()).pipe(map(x => x[0].concat(x[1])))
    )).subscribe(messages => {
      this.feed = messages
    })
  }


  ngOnDestroy(): void {
    this.feedEventSubscription.unsubscribe();
  }
};





