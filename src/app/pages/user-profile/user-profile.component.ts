import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: IUser;

  constructor(private authService: AuthService,private toggleService: ToggleService) {
    this.authService.authUser.subscribe(user => {
      if (user) {
        this.user = user
        console.log(this.user)

      }
    });
   }

  ngOnInit() {

  }
  isActive() {
    return this.toggleService.showSidebar
  }
}
