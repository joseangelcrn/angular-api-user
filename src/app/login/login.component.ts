import { Component, OnInit } from '@angular/core';
import { HerokuService } from '../heroku.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Login';
  user= {
    email:'',
    password:''
  };
  submited = false;
  message = null;


  constructor(
    private herokuService:HerokuService,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  login(){
      this.submited = true;
      this.message = null;

      console.log('user');
      console.log(this.user);

      this.herokuService.login(this.user)
          .subscribe(
            data => {
              // this.message ='Usuario creado correctamente';
              console.log('response');
              let token = data['access_token'];
              console.log('token');
              console.log(token);

              if (token != null) {
                this.authService.saveToken(token);
                this.router.navigate(['home']);
              }
            },
            error =>{
              console.log('error');
              console.log(error);
            })
            .add(
              ()=>{
                this.submited = false;
              }
            );
    }

}
