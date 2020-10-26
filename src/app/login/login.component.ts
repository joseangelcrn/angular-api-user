import { Component, OnInit } from '@angular/core';
import { HerokuService } from '../heroku.service';

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
    private herokuService:HerokuService
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
              // console.log(data);
              let token = data['access_token'];
              console.log('token');
              console.log(token);

              if (token != null) {
                localStorage.setItem('token', JSON.stringify(token));
              }
            },
            error =>{
              // this.message ='Ha ocurrido un error al registrar el usuario';
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
