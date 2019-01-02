import { Component, OnInit,ViewChild } from '@angular/core';
import { OrderService } from '../services/order.service';
import { TotalbillService } from '../services/totalbill.service';
import { Router } from '@angular/router';
import { order_class } from '../Classes/order';
import { bill_class } from '../Classes/bill';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) Sort:MatSort;
  o_price:number;
  o_date:Date;
  fk_email_id:number;
  bill_amt:number;
  billarr:bill_class[]=[];
  orderarr:order_class[]=[];
  constructor(private _bill:TotalbillService,private _order:OrderService,private _route:Router) { }
  dataSource=new MatTableDataSource(this.orderarr)
  displayedColumns:string[] = ['fk_email_id','o_price','o_date','action'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onclickdone(item){
     this._route.navigate(['menu/billdetail',item.bill_id])
  }
  oncheck(item){
    console.log(item)
    this.bill_amt=this.o_price;
    console.log(this.bill_amt)
    this._bill.addbill(new bill_class(item.o_price,item.fk_email_id,item.Date)).subscribe(
        (data:any)=>{
          console.log(data)
          
          alert("Successfully Added")
        }
    );
  }
  oncancel(item)
  {

  }
  ngOnInit() {
    this._order.getallorder().subscribe(
      (data:any)=>{
        console.log(data);
        this.orderarr=data;
        this.dataSource= new MatTableDataSource(this.orderarr);    
        this.dataSource.paginator = this.paginator;
       this.dataSource.sort=this.Sort;
      }
    );
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
