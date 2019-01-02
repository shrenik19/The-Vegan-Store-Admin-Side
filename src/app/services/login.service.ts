import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { info_class } from '../Classes/info';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private login:string='http://localhost:3000/login/';
  constructor(private _http:HttpClient) { }
  getUserLogin(item:info_class){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.login,body,{headers:head1})
  }
}