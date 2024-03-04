import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComponentsRoutes } from 'src/app/shared/utils/components-routes';
import { LoginRequest } from '../../payload/login-request';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ComponentsRoutes],
})
export class LoginComponent implements OnInit {

  componentRoutes = ComponentsRoutes;
  loginCredential = new LoginRequest();

  constructor(private authService: AuthService,private router:Router) {}

  ngOnInit(): void {}
  public adminLogin() {
    this.authService.loginAdmin(this.loginCredential).subscribe({
      next: (data: any) => {
        this.authService.setToken(data.admin.accessToken)
        this.router.navigate([this.componentRoutes.ADMIN_HOME])
      },
      error: (er: any) => {},
    });
  }


  //routerLink="{{componentRoutes.DASHBOARD}}"
}
