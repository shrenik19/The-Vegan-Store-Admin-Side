import { Component, OnInit,ViewChild } from '@angular/core';
import { OrderService } from '../services/order.service';
import { TotalbillService } from '../services/totalbill.service';
import { Router } from '@angular/router';
import { order_class } from '../Classes/order';
import { orderdetail_class } from '../Classes/orderdetail';
import { bill_class } from '../Classes/bill';
import { OrderdetailService } from '../services/orderdetail.service';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import { billdetail_class } from '../Classes/billdetail';
import { BilldetailService } from '../services/billdetail.service';
import { product_class } from '../Classes/product';

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
  billdetailarr:billdetail_class[]=[];
  bill_details_arr:billdetail_class[]=[];
  sub_o_id:number;
  fk_bill_id:number[]=[];
  fk_p_id:number;
  product_arr:product_class[]=[];
  qty:number[]=[];
  price:number[]=[];
  i:number;
  fk_o_id:number[]=[];
  insertId:number;
  constructor(private _bill:TotalbillService,private _billdetail:BilldetailService,private _orderdetail:OrderdetailService,private _order:OrderService,private _route:Router) { }
  dataSource=new MatTableDataSource(this.orderarr)
  displayedColumns:string[] = ['fk_email_id','o_price','o_date','action'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onclickdone(item){
     this._route.navigate(['menu/billdetail',item.bill_id])
  }
  oncheck(item){
    this.bill_details_arr.splice(0,this.bill_details_arr.length);
    this.bill_amt=this.o_price;
    this._bill.addbill(new bill_class(item.o_price,item.fk_email_id,item.Date)).subscribe(
        (data:any)=>{
          this.insertId=data.insertId;
          console.log(this.insertId)
          this._orderdetail.getorderdetails(item.o_id).subscribe(
            (data:any)=>
            {
              console.log(data)
              for(this.i=0;this.i<data.length;this.i++)
              {
                console.log(data)
                this.fk_p_id=data[this.i].fk_p_id;
                this.price=data[this.i].price;
                this.qty=data[this.i].qty;
                console.log(this.insertId,this.fk_p_id,this.price,this.qty)
                this.bill_details_arr.push(new billdetail_class(this.insertId,this.fk_p_id,this.price,this.qty))
                  console.log(this.insertId,this.fk_p_id,this.qty,this.price);
              }
              this._billdetail.addbilldetail(this.bill_details_arr).subscribe(
                (data:any)=>{

                }
              );
            }
          );
          alert("Successfully Added");

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