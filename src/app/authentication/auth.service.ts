import { Injectable } from '@angular/core';
import { LoginRequest } from './payload/login-request';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../shared/utils/api-routes';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public static ACCESS_TOKEN = 'accessToken';
  constructor(private http: HttpClient) {}

  public setToken(token:string){
    localStorage.setItem(AuthService.ACCESS_TOKEN,token);
  }

  public getToken(){
    let token = localStorage.getItem(AuthService.ACCESS_TOKEN);
    if(token != null)
      return token;
    return null;
  }

  public loginAdmin(loginCredential: LoginRequest):Observable<any> {
    return this.http.post<any>(ApiRoutes.ADMIN_LOGIN,loginCredential);
  }

}
