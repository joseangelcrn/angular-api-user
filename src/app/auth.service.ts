import { Injectable } from '@angular/core';


const AUTH_TOKEN_KEY = 'auth_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public saveToken(token){
    localStorage.setItem(AUTH_TOKEN_KEY,token);
  }

  public removeToken() {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }

  public getToken() {
    localStorage.getItem(AUTH_TOKEN_KEY);
  }

  public isAuth(){
    if (this.getToken()!= null) {
      return true;
    }
    return false;
  }

}
