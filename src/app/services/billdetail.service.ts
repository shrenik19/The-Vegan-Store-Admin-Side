import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { billdetail_class } from '../Classes/billdetail';
@Injectable({
  providedIn: 'root'
})
export class BilldetailService {
  private billdetail:string="http://Localhost:3000/billdetail/";
  constructor(private _http:HttpClient) { }
  getbilldetails(bill_id)
  {
    console.log(bill_id);
    return this._http.get(this.billdetail+bill_id);
  }
   addbilldetail(item){
     let body=JSON.stringify(item)
     let head1=new HttpHeaders().set('Content-Type','application/json');
     return this._http.post(this.billdetail,body,{headers:head1})
 }

}
