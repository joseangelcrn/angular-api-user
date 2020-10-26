import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HerokuService {

  private REST_API_SERVER = " https://api-auth-user.herokuapp.com/api";
  private SIGNUP = "/signup";
  private LOGIN = "/login";
  private HOME = "/user";
  private LOGOUT = "/logout";


  constructor(private http: HttpClient) {}

  public register(user){
    return this.http.post(this.REST_API_SERVER+this.SIGNUP, user);
  }

  public login(user) {
    return this.http.post(this.REST_API_SERVER+this.LOGIN, user);
  }
}
