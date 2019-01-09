import { Injectable } from '@angular/core';
import { supplier_class } from '../Classes/supplier';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private supplier:string='http://localhost:3000/supplier/';
  private supplierbycat:string='http://Localhost:3000/supplierbycat/';
  constructor(private _http:HttpClient) { }
  getAllsupplier(){
    return this._http.get(this.supplier);
  }
  deletesupplier(item:supplier_class[]){
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.post(this.supplier,body,{headers:head1})
  }
  deletesupplierByID(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.supplier+item.s_id,body,{headers:head1})
}
  addsupplier(item){
    
    return this._http.post(this.supplier,item)
  }
  getAllsupplierByid(s_id)
  {
    return this._http.get(this.supplier+s_id);
  }
  updatesupplier(item:supplier_class){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.supplier+item.s_id,body,{headers:head1})
  }
  getallsupplierBycat(cat_name:string){
    return this._http.get(this.supplierbycat+cat_name)
  }
}
