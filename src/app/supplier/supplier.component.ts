import { Component, OnInit,ViewChild } from '@angular/core';
import { SupplierService } from '../services/supplier.service';
import { supplier_class } from '../Classes/supplier';
import { Router,ActivatedRoute } from '@angular/router';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import { category_class } from '../Classes/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) Sort:MatSort;

  s_id:number;
  s_name:string;
  fk_p_id:number;
  s_mno:number;
  s_address:number;
  p_id:number;
  p_name:string;
  p_price:number;
  p_qty:number;
  fk_cat_id:number;
  p_mfg:string;
  p_img:string;
  buffer_stock:number;
  fk_s_id:number;
  cat_id:number;
  cat_name:string;
  supplierarr:supplier_class[]=[];
  catarr:category_class[]=[];
  //delarr:supplier_class[]=[];
  i:number=0;
  flag:boolean=false;
  constructor(private _actroute:ActivatedRoute,private _route:Router,private _supplierservice:SupplierService,private _catser:CategoryService) { }
  dataSource=new MatTableDataSource(this.supplierarr)
  displayedColumns:string[] = ['Action','s_name','cat_name','p_name','s_address','s_mno','Edit'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

onupdatesupplier(item:supplier_class){
  this._route.navigate(['menu/update-supplier',item.s_id]);
}
 onAll(){
   this._supplierservice.getAllsupplier().subscribe(
    (data:any)=>{
       this.supplierarr=data;
       this.dataSource= new MatTableDataSource(this.supplierarr);    
        this.dataSource.paginator = this.paginator;
       this.dataSource.sort=this.Sort;
     }
   );
 }

 oncat(cat_name){
   this.supplierarr.splice(0,this.supplierarr.length);
   this._supplierservice.getallsupplierBycat(cat_name).subscribe(
     (data:any[])=>{
       this.supplierarr=data
       this.dataSource.data=this.supplierarr;
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort=this.Sort;
     }
   );
 }


  // checkchangepro(item:product_class){
  //   if(this.delarr.find(x=>x==item)){
  //     this.delarr.splice(this.delarr.indexOf(item),1)
  //   }
  //   else
  //   {
  //     this.delarr.push(item)
  //   }
  //   console.log(this.delarr)
  // } 

  // ondelete(){
  //   this._supplierservice.deletesupplierByID(this.delarr).subscribe(
  //     (x:any)=>{
  //       for(this.i=0;this.i<this.delarr.length;this.i++){
  //         if(this.proarr.find(x=>x==this.delarr[this.i])){
  //           this.proarr.splice(this.proarr.indexOf(this.delarr[this.i]),1);
  //         }
  //       }
  //       this.dataSource.data=this.proarr;
  //     }
  //   );
  // }

  ondeletepro(item:supplier_class){
    this._supplierservice.deletesupplierByID(item).subscribe(
      (data:supplier_class)=>{
        this.supplierarr.splice(this.supplierarr.indexOf(item),1)
        console.log(this.supplierarr)
        this.ngOnInit();
      }  
    );
    
  }
  onAddpro(){
    this._route.navigate(['menu/addsupplier']);
  }

  ngOnInit() {
    this._supplierservice.getAllsupplier().subscribe(
      (data:any)=>{
        this.supplierarr=data;
        this.dataSource= new MatTableDataSource(this.supplierarr);    
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
