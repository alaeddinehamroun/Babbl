import { Injectable } from '@angular/core';
import * as firebaseAuth from 'firebase/auth';
import { ChatMessage } from '../models/chat-message.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  user: firebaseAuth.UserInfo;
  chatMessages: AngularFireList<ChatMessage>;
  chatMessage: ChatMessage;
  username: string;
  now: Date;

  constructor(private db: AngularFireDatabase) {

  }

  searchUsers(username: string): AngularFireList<IUser> {
    const path = '/users';
    return this.db.list(path, ref => ref.orderByChild('displayName').startAt(username).endAt(username+"\uf8ff"));
  }

  getUser() {
    const currentUserId = this.user.uid;
    const path = `/users/${currentUserId}`;
    return this.db.object(path);
  }

  getOnlineUsers(): AngularFireList<IUser> {
    const path = '/users';
    return this.db.list(path, ref => ref.orderByChild('status').equalTo('online'));
  }

  sendMessage(message: string, fromto: string, email: string) {
    const timestamp = this.getTimeStamp();
    const result = fromto.split(' > ', 2)
    const from = result[0]
    const to=result[1]

    this.chatMessages = this.getMessages(from, to);
    this.chatMessages.push({
      message: message,
      timeSent: timestamp,
      fromto: fromto,
      email: email
    });
  }

  getMessages(from: string, to: string): AngularFireList<ChatMessage> {
    return this.db.list('messages', ref => ref.limitToLast(25).orderByChild('fromto').equalTo(from+' > '+to));
  }

  getTimeStamp() {
    const now = new Date();
    const date = `${now.getUTCFullYear()}/${(now.getUTCMonth() + 1)}/${now.getUTCDate()}`;
    const time = `${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}:${now.getUTCMilliseconds()}`;
    return date + '-' + time
  }

}
