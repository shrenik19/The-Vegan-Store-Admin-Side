import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { bill_class } from '../Classes/bill';

@Injectable({
  providedIn: 'root'
})
export class TotalbillService {
  private bill:string="http://Localhost:3000/bill/";
  constructor(private _http:HttpClient) { }
  getallbill()
  {
    return this._http.get(this.bill);
  }
  addbill(item:bill_class){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.bill,body,{headers:head1})
  }

}
