import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { changepwd_class } from '../Classes/changepwd';


@Injectable({
  providedIn: 'root'
})
export class ChangepswdService {
  private changepwd:string='http://Localhost:3000/changepswd/';
  constructor(private _http:HttpClient) { }
  getAllUserByEmail_id(id:string)
  {
    return this._http.get(this.changepwd+id);
  }
  updatePassword(item:changepwd_class){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.changepwd+item.email_id,body,{headers:head1})
  }
}
