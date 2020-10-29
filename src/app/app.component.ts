import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-api-user';

  constructor(
    private authService: AuthService,
  ){

  }

  public isAuth(){
    return this.authService.isAuth();
  }
}
