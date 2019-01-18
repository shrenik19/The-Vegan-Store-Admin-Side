import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { product_class } from '../Classes/product';
import { category_class } from '../Classes/category';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { SUPPLIER_class } from '../Classes/supplier_class';
import { SupplierService } from '../services/supplier.service';

@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.css']
})
export class AddsupplierComponent implements OnInit {

  constructor(private _proser:ProductService,private _route:Router,private _catser:CategoryService,private _supplierser:SupplierService) { }
  s_id:number;
  s_name:string;
  fk_p_id:number;
  s_mno:number;
  s_address:string;
  fk_cat_id:number;
  supplier_arr:SUPPLIER_class[]=[];
  prodarr:product_class[]=[];
  catarr:category_class[]=[];
  addsuparr:SUPPLIER_class[]=[];
  onaddsupplier(){
    this._supplierser.addsupplier(new SUPPLIER_class(this.s_name,this.s_mno,this.s_address,this.fk_cat_id,this.fk_p_id)).subscribe(
      (data:SUPPLIER_class[])=>{
        console.log(data);
        this.supplier_arr.push(new SUPPLIER_class(this.s_name,this.s_mno,this.s_address,this.fk_cat_id,this.s_id,this.fk_p_id));
      });
  }
  onclickcat(item:any){
    this._supplierser.getallsupplierpro(this.fk_cat_id).subscribe(
      (data:any)=>{
        this.prodarr=data;
      }
    );
  }

  onaddsup(item){
    this._supplierser.addsupplier(new SUPPLIER_class(this.s_name,this.s_mno,this.s_address,this.fk_cat_id,this.s_id,this.fk_p_id)).subscribe(
      (data:SUPPLIER_class)=>{
        this.addsuparr.push(new SUPPLIER_class(this.s_name,this.s_mno,this.s_address,this.fk_cat_id,this.s_id,this.fk_p_id));
        alert("supplier added successfully");
        this._route.navigate(['menu/supplier']);
      }
    )
    
  }

  ngOnInit() {
    this._catser.getAllcat().subscribe(
      (data:any[])=>{
        this.catarr=data;
      }
    );
    
  }

}
