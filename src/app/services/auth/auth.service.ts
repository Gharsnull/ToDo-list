import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly afAuth = getAuth();
  readonly user = signal<User | null>(null);

  constructor(
    private readonly router: Router,
  ) {
    onAuthStateChanged(this.afAuth, (user) => {
      this.user.set(user);

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
