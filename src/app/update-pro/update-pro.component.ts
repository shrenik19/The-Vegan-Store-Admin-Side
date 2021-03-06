import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product_class } from '../Classes/product';
import { proupdate_class } from '../Classes/proupdate';

@Component({
  selector: 'app-update-pro',
  templateUrl: './update-pro.component.html',
  styleUrls: ['./update-pro.component.css']
})
export class UpdateProComponent implements OnInit {
  p_id:number;
  p_name:string;
  p_price:number;
  p_qty:number;
  fk_cat_id:number;
  p_mfg:string;
  p_img:string;
  buffer_stock:number;
  fk_s_id:number;
  x:number;
  prodarr:product_class[]=[];
  selectedFile:File=null;
  flag:boolean=false;
  constructor(private _route:Router,private _acroute:ActivatedRoute,private _proser:ProductService) { }
  onSave(){
    if(this.flag==true)
    {
      const fd=new FormData();

    fd.append('p_id',this.p_id.toString());
    fd.append('p_name',this.p_name);
    fd.append('p_price',this.p_price.toString());
    fd.append('p_qty',this.p_qty.toString());
    fd.append('fk_cat_id',this.fk_cat_id.toString());
    fd.append('p_mfg',this.p_mfg);
    fd.append('p_img',this.selectedFile,this.selectedFile.name);
    fd.append('buffer_stock',this.buffer_stock.toString());
    fd.append('fk_s_id',this.fk_s_id.toString());

    this._proser.updatepro(fd).subscribe(
      (data:any)=>{
        this.prodarr.push(new product_class(this.p_name,this.p_price,this.p_qty,this.fk_cat_id,this.p_mfg,this.p_img,this.buffer_stock,this.fk_s_id,this.p_id));
         this._route.navigate(['menu/product']);
      }
    );
    }
    else
    {
       this._proser.updateprowithoutimg(new proupdate_class(this.p_id,this.p_name,this.p_price,this.p_qty,this.p_mfg,this.buffer_stock)).subscribe(
    (data:any)=>{
               this._route.navigate(['menu/product']);
                }
        )
     }
    }
    oncancel(){
      this._route.navigate(['menu/product']);
    }
    onchange(value){
      this.selectedFile=<File>value.target.files[0];
      if(this.selectedFile)
      {
        this.flag=true;
      }
      else
      {
        this.flag=false
      }
    }
  ngOnInit() {
    this.x=this._acroute.snapshot.params['p_id'];
    this._proser.getAllproById(this.x).subscribe(
          (data:product_class[])=>{
          console.log(data)
          this.p_id=data[0].p_id;
          this.p_name=data[0].p_name;
          this.p_price=data[0].p_price;
          this.fk_cat_id=data[0].fk_cat_id;
          this.p_qty=data[0].p_qty;
          this.p_mfg=data[0].p_mfg;
          this.p_img=data[0].p_img;
          this.buffer_stock=data[0].buffer_stock;
          this.fk_s_id=data[0].fk_s_id;

       }
     );
  }

}
