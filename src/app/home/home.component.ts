import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HerokuService } from '../heroku.service';
import { Observable } from 'rxjs';
import { User } from "../user.model";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Home';
  user:User = null;

  constructor(
    private authService: AuthService,
    private herokuService: HerokuService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadUserInfo();
    console.log(this.user);

  }

  loadUserInfo() {
    let that = this;
    this.herokuService.home().subscribe(
      (data)=>{
        console.log('Successfully loaded user info');
        that.user = new User(data['id'],data['name'],data['email'],data['created_at']);
        console.log('USER OBJECT');
        console.log(that.user);

      },
      (error)=>{
        console.log('Error getting user info');
        console.log(error);
        this.authService.removeToken();
        this.router.navigate(['login']);

      }
    )

  }

  logout(){
    console.log('logout !');
    this.authService.removeToken();
    this.router.navigate(['login']);
  }
}
