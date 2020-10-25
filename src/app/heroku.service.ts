import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HerokuService {

  private REST_API_SERVER = " https://api-auth-user.herokuapp.com/api";
  private SIGNUP = "/signup";


  constructor(private http: HttpClient) {}

  public register(user){
    return this.http.post(this.REST_API_SERVER+this.SIGNUP, user);
  }
}
