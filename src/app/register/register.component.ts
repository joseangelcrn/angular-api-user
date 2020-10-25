import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HerokuService } from "../heroku.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = 'Registro';
  user= {
    name:'aaaa',
    email:'aaa@gmail.com',
    password:'aaa',
    repeat_password:'aaa'
  };
  submited = false;
  message = null;

  constructor(
    private herokuService:HerokuService
  ) { }

  ngOnInit(): void {

  }


  register(){
    this.submited = true;
    this.message = null;
    if (this.user.password === this.user.repeat_password) {
        this.herokuService.register(this.user)
        .subscribe(
          data => {
            console.log(data);
            this.message ='Usuario creado correctamente';
          },
          error =>{
            console.log(error);
            this.message ='Ha ocurrido un error al registrar el usuario';
          }
        );

    }
    else{
      alert('Error: Las contraseñas no coinciden !');
    }
    this.submited = false;
  }

}
