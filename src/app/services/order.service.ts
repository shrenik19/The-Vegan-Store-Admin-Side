import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { order_class } from '../Classes/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private order:string="http://Localhost:3000/order/";
  constructor(private _http:HttpClient) { }
  getallorder()
  {
    return this._http.get(this.order);
  }
}
