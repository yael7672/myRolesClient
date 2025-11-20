import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = signal<boolean>(false);

  // סתם דוגמה  ל-API
  login(username: string, password: string): boolean {
    if (username === 'yael' && password === '1234') {
      this.loggedIn.set(true);
      localStorage.setItem('token', 'fake-token');
      return true;
    }

    this.loggedIn.set(false);
    localStorage.removeItem('token');
    return false;
  }

  logout() {
    this.loggedIn.set(false);
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    // אפשר לקרוא רק מה-signal, או לבדוק token
    return this.loggedIn() || !!localStorage.getItem('token');
  }
}
