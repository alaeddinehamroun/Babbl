import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ToggleService } from 'src/app/services/toggle.service';
@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnDestroy {
  private userEventSubscription: Subscription;
  user: IUser;
  constructor(private toggleService: ToggleService,
    private authService: AuthService,
  ) {
    this.userEventSubscription = this.authService.authUser.subscribe(user => {
      if (user) {
        this.user = user
      }
    });
  }

  toggleSidebar() {
    this.toggleService.showSidebar = !this.toggleService.showSidebar;
  }

  ngOnDestroy(): void {
    this.userEventSubscription.unsubscribe();
  }

}
