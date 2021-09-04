import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from '@firebase/util';
import { map } from 'rxjs/operators';
import { ChatMessage } from 'src/app/models/chat-message.model';
import { ChatService } from 'src/app/services/chat.service';
import { ToggleService } from 'src/app/services/toggle.service';


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {
  selectedUser: any = {username : ""};
  constructor(private toggleService: ToggleService,
              private activatedRoute: ActivatedRoute,
              private chatService: ChatService) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map((param: ParamMap) => {
        return param.get("username")
      })
    ).subscribe(username => {
      if (username)
        this.selectedUser.username = username ;
    })
  }
  
  
  isActive() {
    return this.toggleService.showSidebar
  }
}
