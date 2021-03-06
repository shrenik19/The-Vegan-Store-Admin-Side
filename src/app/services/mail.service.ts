import { Injectable } from '@angular/core';
import { sendmail } from '../Classes/mail';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { info_class } from '../Classes/info';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private forget:string='http://localhost:3000/forget/';
  private email:string='http://localhost:3000/mail/';
  constructor(private _http:HttpClient) { }

  getpassById(email_id:string){
    return this._http.get(this.forget+email_id);
  }

  sendmail(item:sendmail){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.email,body,{headers:head1})
  }
}
