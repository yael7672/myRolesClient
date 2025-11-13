import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  
  loggedIn = signal(false);   

  login(user: string, pass: string): boolean {
    if (user === 'admin' && pass === '123') {
      this.loggedIn.set(true);
      return true;
    }
    return false;
  }

  logout() {
    this.loggedIn.set(false);
  }

  isLoggedIn() {
    return this.loggedIn();
  }
}
