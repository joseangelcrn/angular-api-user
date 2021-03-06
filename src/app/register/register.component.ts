import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HerokuService } from "../heroku.service";
import { CompileTemplateMetadata } from '@angular/compiler';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = 'Registro';
  user= {
    name:'',
    email:'',
    password:'',
    repeat_password:''
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
            this.message ='Usuario creado correctamente';
          },
          error =>{
            this.message ='Ha ocurrido un error al registrar el usuario';
          })
          .add(
            ()=>{
              this.submited = false;
            }
          );

    }
    else{
      alert('Error: Las contraseñas no coinciden !');
    }
  }

}
