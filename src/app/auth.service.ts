import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


const AUTH_TOKEN_KEY = 'auth_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(
    private router:Router
  ) { }

  public saveToken(token){
    localStorage.setItem(AUTH_TOKEN_KEY,token);
  }

  public removeToken() {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }

  public getToken() {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }

  public isAuth(){
    if (this.getToken()!= null) {
      return true;
    }
    return false;
  }

  public canActivate(){
    if (this.isAuth()) {
      return true;
    }
    else{
      this.router.navigate(['login']);
    }
  }
}
