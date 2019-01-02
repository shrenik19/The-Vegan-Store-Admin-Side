import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { bill_class } from '../Classes/bill';
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

}
