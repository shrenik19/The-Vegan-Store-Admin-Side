import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { info_class } from '../Classes/info';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private login:string='http://localhost:3000/login/';
  private profile:string='http://localhost:3000/profile/';
  constructor(private _http:HttpClient) { }
  getUserLogin(item:info_class){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.login,body,{headers:head1})
  }
  getAllUserByEmail_id(email_id:string)
  {
    return this._http.get(this.profile+email_id);
  }
  updateprofile(item:info_class){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.profile+item.email_id,body,{headers:head1})
  }
}