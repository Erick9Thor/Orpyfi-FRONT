import { Component } from '@angular/core';
import {User} from './models/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent { //Propiedades
  public title = 'Orpyfy!';
  public user: User;
  public identity; //Información del usuario, localStorage.
  public token;

  constructor(){
    this.user = new User('','','','','','ROLE_USER','');
  }

  public onSubmit(){
    console.log(this.user)
  }
}
