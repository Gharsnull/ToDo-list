import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut, User } from '@angular/fire/auth';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly afAuth = getAuth();
  private readonly _user = new BehaviorSubject<User|null>(null)
  readonly user = toSignal(this._user);

  constructor(
    private readonly router: Router,
  ) {
    onAuthStateChanged(this.afAuth, (user) => {
      this._user.next(user);

      if(!user) {
        return this.router.navigate(['/login'])
      }

      return this.router.navigate(['/'])
    });
  }

  googleSignIn() {
    void signInWithPopup(this.afAuth, new GoogleAuthProvider());
  }

  signOut() {
    void signOut(this.afAuth);
  }
}
