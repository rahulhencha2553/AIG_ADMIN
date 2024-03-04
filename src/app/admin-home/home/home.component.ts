import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title = 'Dashboard';

  public getTitleName(event:any){
    this.title = event;
  }

  isLoggedIn = false

  public setLogged(event:any){
    console.log(event);
    this.isLoggedIn = event
  }

}
