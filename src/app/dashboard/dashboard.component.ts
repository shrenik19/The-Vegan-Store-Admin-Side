import { Component,ViewChild,OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { ProductService } from '../services/product.service';
import { product_class } from '../Classes/product';
import { OrderdetailService } from '../services/orderdetail.service';
import { Router,ActivatedRoute } from '@angular/router';
import { SupplierService } from '../services/supplier.service';
import { supplier_class } from '../Classes/supplier';
import { order_class } from '../Classes/order';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import { category_class } from '../Classes/category';
import { CategoryService } from '../services/category.service';
import { TotalbillService } from "../services/totalbill.service";
import { OrderService } from "../services/order.service";
import { topfive_class } from '../Classes/topfive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
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
  fk_email_id:string;
  bill_amt:number;
  date:Date;
  proarr:product_class[]=[];
  delarr:product_class[]=[];
  proarr1:product_class[]=[];
  orderarr:order_class[]=[];
  cat_name:string;
  cat_id:number;
  catarr:category_class[]=[];
  delarr1:category_class[]=[];
  supplierarr:supplier_class[]=[];
  i:number=0;
  p_img2:string;
  p_name2:string;
  p_qty2:number;
  buffer_stock2:number;


  toparr:topfive_class[]=[];


  constructor(private _supplierservice:SupplierService,private _order:OrderService,private _actroute:ActivatedRoute,private _route:Router,private _proser:ProductService,private _catser:CategoryService) {}
  dataSource=new MatTableDataSource(this.proarr)
  displayedColumns:string[] = ['p_img','p_name','p_price'];
  catdatasource=new MatTableDataSource(this.catarr)
  productsamestock=new MatTableDataSource(this.proarr1);
  orderdatasource=new MatTableDataSource(this.orderarr);
  supplierdatasource=new MatTableDataSource(this.supplierarr);
  displayedColumns1:string[] = ['Action','cat_name','Edit'];
  displayedColumns2:string[] = ['p_img','p_name','buffer_stock','p_qty'];
  displayedColumns3:string[] = ['fk_email_id','o_price','o_date'];
  displayedColumns4:string[] = ['s_name','cat_name','p_name','s_address','s_mno'];

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }


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
    onupdate(item){
  this._route.navigate(['menu/update-cat',item.cat_id]);
}
ondeletecat(item:category_class){
  this._catser.deletecatByID(item).subscribe(
    (data:category_class)=>{
      this.catarr.splice(this.catarr.indexOf(item),1)
      console.log(this.catarr)
      this.ngOnInit();
    }
  );

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
    checkchange(item:category_class){
      if(this.delarr1.find(x=>x==item)){
        this.delarr1.splice(this.delarr1.indexOf(item),1)
      }
      else
      {
        this.delarr1.push(item)
      }
      console.log(this.delarr)
    }



    ngOnInit() {
      this._order.topFive().subscribe(
        (data:any)=>{
          this.toparr=data;
          this.dataSource= new MatTableDataSource(this.toparr);
           this.dataSource.paginator = this.paginator;
          this.dataSource.sort=this.Sort;
                  }
      );

      this._proser.getAllproduct().subscribe(
        (data:any)=>{
          this.proarr=data;
          this.dataSource= new MatTableDataSource(this.proarr);
           this.dataSource.paginator = this.paginator;
          this.dataSource.sort=this.Sort;
                  }
      );
      this._order.getallorder().subscribe(
        (data:any)=>{
          console.log(data);
          this.orderarr=data;
          this.orderdatasource= new MatTableDataSource(this.orderarr);
          this.orderdatasource.paginator = this.paginator;
         this.orderdatasource.sort=this.Sort;
        }
      );
      this._supplierservice.getAllsupplier().subscribe(
        (data:any)=>{
          this.supplierarr=data;
          this.supplierdatasource= new MatTableDataSource(this.supplierarr);
           this.supplierdatasource.paginator = this.paginator;
          this.supplierdatasource.sort=this.Sort;
        }
      );


      this._catser.getAllcat().subscribe(
        (data:any[])=>{
          this.catarr=data;
          this.catdatasource= new MatTableDataSource(this.catarr);
          console.log(this.catdatasource);
          console.log(this.catarr);


        }
      );

      this._proser.getallbufferproduct().subscribe(
        (data:any)=>{
          this.proarr1=data;
          this.productsamestock= new MatTableDataSource(this.proarr1);
           this.productsamestock.paginator = this.paginator;
          this.productsamestock.sort=this.Sort;
          console.log("stock");
          console.log(this.proarr1);
        }
      );
      }


      onMoveToProduct(){
        this._route.navigate(['menu/product']);
      }
      onMoveToCategory(){
        this._route.navigate(['menu/category']);
      }
      onMoveTOStockDetails(){
        this._route.navigate(['menu/productreminder']);
      }
      onMoveToSupplier()
      {
        this._route.navigate(['menu/supplier']);
      }
      onMoveToOrder()
      {
        this._route.navigate(['menu/totalorder']);
      }
}
