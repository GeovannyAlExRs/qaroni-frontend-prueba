import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(userId: string, token: string) {
    //console.log("Service SaveToken: UserID" + userId + ' Token: ' + token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('access_token', token);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  getUserID() {
    return localStorage.getItem('userId');
  }

  removeToken() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('userId');
  }
}
