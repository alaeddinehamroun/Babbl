import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserLayoutRoutes } from './user-layout.routing';
import { ChatroomComponent } from '../../pages/chatroom/chatroom.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedComponent } from 'src/app/components/feed/feed.component';
import { ChatFormComponent } from 'src/app/components/chat-form/chat-form.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    ChatroomComponent,
    UserProfileComponent,
    FeedComponent,
    ChatFormComponent,
  ]
})

export class UserLayoutModule {

}
