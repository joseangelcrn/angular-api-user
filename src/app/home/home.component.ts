import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Home';
  user = {
    name:'wqe',
    email:'qwe'
  }
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loadUserInfo(){

  }

  logout(){
    console.log('logout !');
    this.authService.removeToken();
    this.router.navigate(['login']);
  }
}
