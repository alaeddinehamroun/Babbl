import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public user: Observable<any>;
  private authState: any;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
    this.user = afAuth.authState
  }

  get currentUserId(): string {
    return this.authState ? this.authState.uid : '';
  }

  get authUser() {
    return this.user
  }

  async signUp(email: string, password: string, username: string) {
    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.authState = res.user;
      const status = 'online';
      const photoURL = 'https://ui-avatars.com/api/?name='+username.toString()
      this.setUserData(email, username, status, photoURL);
      res.user?.updateProfile({
        displayName: username,
        photoURL: photoURL
      })
      this.router.navigate(['chatroom']);
    } catch (error) {
      return console.log(error);
    }
  }

  async login(email: string, password: string) {
    const res = await this.afAuth.signInWithEmailAndPassword(email, password);
    this.authState = res.user;
    this.setUserStatus('online');
    this.router.navigate(['chatroom']);
  }

  async logout() {
    await this.afAuth.signOut().then(() =>{
      this.setUserStatus('offline')
      this.router.navigate(['login'])
    }

    )

  }

  setUserStatus(status: string): void {
    const path = `users/${this.currentUserId}`;
    const data = {
      status: status
    };
    if(this.currentUserId) {
      this.db.object(path).update(data)
      .catch(error => console.log(error));
    }

  }

  setUserData(email: string, username: string, status: string, photoURL: string): void {
    const path = `users/${this.currentUserId}`;
    const data = {
      email: email,
      displayName: username,
      status: status,
      photoURL: photoURL
    };
    this.db.object(path).update(data)
      .catch(error => { console.log(error) });
  }


}
