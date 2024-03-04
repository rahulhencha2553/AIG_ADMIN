import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  @Output() isLogged = new EventEmitter();

  public setLoggedIn(event:any){
    this.isLogged.emit(event);
  }
}
