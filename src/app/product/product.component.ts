import { Component, OnInit,ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product_class } from '../Classes/product';
import { Router,ActivatedRoute } from '@angular/router';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import { category_class } from '../Classes/category';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) Sort:MatSort;

  p_id:number;
  p_name:string;
  p_price:number;
  p_qty:number;
  fk_cat_id:number;
  p_mfg:string;
  p_img:string;
  buffer_stock:number;
  fk_s_id:number;
  proarr:product_class[]=[];
  catarr:category_class[]=[];
  delarr:product_class[]=[];
  i:number=0;
  flag:boolean=false;
  constructor(private _actroute:ActivatedRoute,private _route:Router,private _proser:ProductService,private _catser:CategoryService) { }

  dataSource=new MatTableDataSource(this.proarr)
  displayedColumns:string[] = ['Action','p_img','p_name','p_price','p_qty','Edit'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

onupdatepro(item){
  this._route.navigate(['menu/update-pro',item.p_id]);
}
onAll(){
  this._proser.getAllproduct().subscribe(
    (data:any)=>{
      this.proarr=data;
      this.dataSource= new MatTableDataSource(this.proarr);    
       this.dataSource.paginator = this.paginator;
      this.dataSource.sort=this.Sort;
    }
  );
}

oncat(cat_name){
  this.proarr.splice(0,this.proarr.length);
  this._proser.getallproBycat(cat_name).subscribe(
    (data:any[])=>{
      this.proarr=data
      this.dataSource.data=this.proarr;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort=this.Sort;
    }
  );
}


  checkchangepro(item:product_class){
    if(this.delarr.find(x=>x==item)){
      this.delarr.splice(this.delarr.indexOf(item),1)
    }
    else
    {
      this.delarr.push(item)
    }
    console.log(this.delarr)
  } 

  ondelete(){
    this._proser.deleteproduct(this.delarr).subscribe(
      (x:any)=>{
        for(this.i=0;this.i<this.delarr.length;this.i++){
          if(this.proarr.find(x=>x==this.delarr[this.i])){
            this.proarr.splice(this.proarr.indexOf(this.delarr[this.i]),1);
          }
        }
        this.dataSource.data=this.proarr;
      }
    );
  }

  ondeletepro(item:product_class){
    this._proser.deleteproByID(item).subscribe(
      (data:product_class)=>{
        this.proarr.splice(this.proarr.indexOf(item),1)
        console.log(this.proarr)
        this.ngOnInit();
      }  
    );
    
  }
  onAddpro(){
    this._route.navigate(['menu/addpro']);
  }


  ngOnInit() {
    this._proser.getAllproduct().subscribe(
      (data:any)=>{
        this.proarr=data;
        this.dataSource= new MatTableDataSource(this.proarr);    
         this.dataSource.paginator = this.paginator;
        this.dataSource.sort=this.Sort;
      }
    );

    this._catser.getAllcat().subscribe(
      (data:any[])=>{
        this.catarr=data;
      }
    );

  }
}
