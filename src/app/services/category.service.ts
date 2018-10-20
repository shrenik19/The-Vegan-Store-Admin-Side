import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { category_class } from '../Classes/category';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private category:string='http://Localhost:3000/category/';
  private update:string='http://Localhost:3000/updatecat/';
  private deleteallcat:string='http://Localhost:3000/deleteallcat/';
  constructor(private _http:HttpClient) { }
  getAllcat(){
    return this._http.get(this.category);
  }
  deletecat(item:category_class[]){
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.post(this.deleteallcat,body,{headers:head1})
  }
  deletecatByID(item:category_class){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.category+item.cat_id,body,{headers:head1})
}
  addcat(item){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.category,item)
  }
  getAllcatById(cat_id)
  {
    console.log(cat_id)
    return this._http.get(this.category+cat_id)
  }
  updatecat(item:category_class){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    console.log(item.cat_id)
    return this._http.put(this.update+item.cat_id,body,{headers:head1})
  }
}
