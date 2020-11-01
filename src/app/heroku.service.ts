import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class HerokuService {

  private REST_API_SERVER = " https://api-auth-user.herokuapp.com/api";
  private SIGNUP = "/signup";
  private LOGIN = "/login";
  private HOME = "/user";
  private LOGOUT = "/logout";


  constructor(
    private http: HttpClient,
    private authService:AuthService
    ) {}

  public register(user){
    return this.http.post(this.REST_API_SERVER+this.SIGNUP, user);
  }

  public login(user) {
    return this.http.post(this.REST_API_SERVER+this.LOGIN, user);
  }

  public  logout() {
    let token = this.authService.getToken();
    let headers  = new HttpHeaders();
    headers.append('Authorization','Bearer '+token);
    return this.http.get(this.REST_API_SERVER+this.LOGOUT,{headers: headers});
  }

  public   home(){
    let token = this.authService.getToken();
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${token}`
    });
    return this.http.get(this.REST_API_SERVER+this.HOME,{headers:headers});
  }
}
