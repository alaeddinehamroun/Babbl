import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() user: IUser;

  constructor(private toggleService: ToggleService,
    private authService: AuthService) {
  }

  toggleSidebar() {
    this.toggleService.showSidebar = !this.toggleService.showSidebar;
  }

  isActive() {
    return this.toggleService.showSidebar
  }

  logout() {
    this.authService.logout()
  }

}
