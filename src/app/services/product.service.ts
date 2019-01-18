import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { product_class } from '../Classes/product';
import { proupdate_class } from '../Classes/proupdate';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product:string='http://Localhost:3000/product/';
  private productwithoutimg:string='http://Localhost:3000/productUpdatewithoutimg/';
  private bufferproduct:string='http://Localhost:3000/reminder/';
  private addpro:string='http://Localhost:3000/addpro/';
  private deleteallpro:string='http://Localhost:3000/deleteandgetallpro/';
  
  constructor(private _http:HttpClient) { }
  getAllproduct(){
    return this._http.get(this.product);
  }
  getallproBycat(cat_name:string){
    return this._http.get(this.deleteallpro+cat_name)
  }
  deleteproduct(item:product_class[]){
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.post(this.deleteallpro,body,{headers:head1})
  }
  deleteproByID(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.product+item.p_id,body,{headers:head1})
}
  addproduct(item:FormData){
    
    return this._http.post(this.addpro,item)
  }
  getAllproById(p_id)
  {
    console.log(p_id)
    return this._http.get(this.product+p_id)
  }
  getallbufferproduct()
  {
    return this._http.get(this.bufferproduct)
  }
  updatepro(item:FormData){
    return this._http.put(this.product,item)
  }
  updateprowithoutimg(item:proupdate_class){
      let body=JSON.stringify(item)
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.productwithoutimg+item.p_id,body,{headers:head1})
  }
}
