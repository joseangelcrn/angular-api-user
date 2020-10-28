import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  loadUserInfo(){

  }
}
