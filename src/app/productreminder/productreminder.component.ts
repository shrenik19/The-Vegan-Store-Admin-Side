import { Component, OnInit,ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product_class } from '../Classes/product';
import { Router,ActivatedRoute } from '@angular/router';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';


@Component({
  selector: 'app-productreminder',
  templateUrl: './productreminder.component.html',
  styleUrls: ['./productreminder.component.css']
})
export class ProductreminderComponent implements OnInit {
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
  i:number=0;
  flag:boolean=false;
  constructor(private _actroute:ActivatedRoute,private _route:Router,private _proser:ProductService) { }


  dataSource=new MatTableDataSource(this.proarr)
  displayedColumns:string[] = ['p_img','p_name','buffer_stock','p_qty'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this._proser.getallbufferproduct().subscribe(
      (data:any)=>{
        this.proarr=data;
        this.dataSource= new MatTableDataSource(this.proarr);    
         this.dataSource.paginator = this.paginator;
        this.dataSource.sort=this.Sort;
      }
    );
  }

}
