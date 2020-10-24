import { Component, OnInit } from '@angular/core';

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

  constructor(

  ) { }

  ngOnInit(): void {

  }


  register(){
    // alert('Usuario registrado');
    console.log('Click !');
    console.log(this.user);
    this.submited = true;
    if (this.user.password === this.user.repeat_password) {
      alert('Submit!');
    }
    else{
      alert('Error: Las contraseñas no coinciden !');
    }
    this.submited = false;
  }

}
