import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {
  selectedUser: any = { username: "", photoURL: "" };
  constructor(private toggleService: ToggleService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {


    this.activatedRoute.paramMap.pipe(
      map((param: ParamMap) => {
        return param.get("username")
      })
    ).subscribe(username => {
      if (username)
        this.selectedUser.username = username;
    })
  }

  isActive() {
    return this.toggleService.showSidebar
  }
}
