import { Routes } from '@angular/router';

import { ChatroomComponent } from '../../pages/chatroom/chatroom.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';

export const UserLayoutRoutes: Routes = [
    { path: 'chatroom',      component: ChatroomComponent },
    { path: 'chatroom/:username',      component: ChatroomComponent },
    { path: 'profile',   component: UserProfileComponent },

];

