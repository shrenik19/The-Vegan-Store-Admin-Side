import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { bill_class } from '../Classes/bill';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailService {
  private orderdetail:string="http://Localhost:3000/orderdetail/";
  constructor(private _http:HttpClient) { }
  getorderdetails(o_id)
  {
    console.log(o_id);
    return this._http.get(this.orderdetail+o_id);
  }
}
