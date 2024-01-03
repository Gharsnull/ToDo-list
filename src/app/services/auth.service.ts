import { computed, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth, signInWithPopup, signOut, user, User } from '@angular/fire/auth';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly afAuth = getAuth();
  user = toSignal<User|null>(user(this.afAuth));
  loggedIn = computed(() => !!this.user())

  constructor(
    private readonly router: Router,
  ) {}

  async googleSignin(): Promise<boolean> {
    await signInWithPopup(this.afAuth, new GoogleAuthProvider());
    return this.router.navigate(['/']);
  }

  async signOut(): Promise<boolean> {
    await signOut(this.afAuth);
    return this.router.navigate(['/login']);
  }
}
