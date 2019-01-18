import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { product_class } from '../Classes/product';
import { category_class } from '../Classes/category';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-addpro',
  templateUrl: './addpro.component.html',
  styleUrls: ['./addpro.component.css']
})
export class AddproComponent implements OnInit {

  constructor(private _proser:ProductService,private _route:Router,private _catser:CategoryService) { }
  p_id:number;
  p_name:string;
  p_price:number;
  p_qty:number;
  fk_cat_id:number;
  p_mfg:string;
  p_img:string;
  buffer_stock:number;
  fk_s_id:number;
  
  prodarr:product_class[]=[];
  catarr:category_class[]=[];
  selectedFile:File=null; 

  onChange(value)
  {
    this.selectedFile=<File>value.target.files[0];
  }
  onaddpro(){
    const fd=new FormData();
    
    
    fd.append('p_name',this.p_name);
    fd.append('p_price',this.p_price.toString());
    fd.append('p_qty',this.p_qty.toString());
    fd.append('fk_cat_id',this.fk_cat_id.toString());
    fd.append('p_mfg',this.p_mfg);
    fd.append('p_img',this.selectedFile,this.selectedFile.name);
    fd.append('buffer_stock',this.buffer_stock.toString());
    fd.append('fk_s_id',this.fk_s_id.toString());
    
    
    this._proser.addproduct(fd).subscribe(
      (data:product_class[])=>{
        console.log(data);
        this.prodarr.push(new product_class(this.p_name,this.p_price,this.p_qty,this.fk_cat_id,this.p_mfg,this.p_img,this.buffer_stock,this.fk_s_id,this.p_id))
        this._route.navigate(['menu/product'])
      }
    );
  }
  oncancel(){
    this._route.navigate(['menu/product'])
  }
  ngOnInit() {
    this._catser.getAllcat().subscribe(
      (data:any[])=>{
        this.catarr=data;
      }
    );
  }

}
