import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

import { ChatMessage } from '../models/chat-message.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: any;
  chatMessages: AngularFireList<ChatMessage>;
  chatMessage: ChatMessage;
  username: string;
  now: Date;

  constructor(private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe(auth => {
      if (auth) {
        this.user = auth;
      }
      
    })

  }
  sendMessage(message: string) {
    const timestamp = this.getTimeStamp();
    //const email = this.user.email;
    const email = 'test@gmail.com';
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: message,
      timeSent: timestamp,
      username: 'test',
      // username: this.username,
      email: email
    });
  }

  getMessages(): AngularFireList<ChatMessage> {
    return this.db.list('messages', ref => ref.orderByKey().limitToLast(25));
  }

  getTimeStamp() {
    const now = new Date();
    const date = `${now.getUTCFullYear()}/${(now.getUTCMonth() + 1)}/${now.getUTCDate()}`;
    const time = `${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCDate()}`;
    return date + '-' + time  }
}