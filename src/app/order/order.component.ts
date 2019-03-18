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
import { LoginService } from '../services/login.service';


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
  fk_email_id:string;

  status1:string="done";
  status:string;
  bill_amt:number;
  fk_address:string;

  billarr:bill_class[]=[];
  orderarr:order_class[]=[];
  billdetailarr:billdetail_class[]=[];
  bill_details_arr:billdetail_class[]=[];
  sub_o_id:number;
  o_id:number;
  fk_bill_id:number[]=[];
  fk_p_id:number;
  product_arr:product_class[]=[];
  qty:number[]=[];
  price:number[]=[];
  i:number;
  fk_o_id:number[]=[];
  insertId:number;
  delarr:order_class[]=[];
  user_id:string;
  o_mode:string;
  constructor(private _bill:TotalbillService,private _billdetail:BilldetailService,private _orderdetail:OrderdetailService,private _order:OrderService,private _route:Router,private _loginser:LoginService) { }
  dataSource=new MatTableDataSource(this.orderarr)
  displayedColumns:string[] = ['Action','fk_email_id','o_price','o_date','status','action'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onclickdone(item){
     this._route.navigate(['menu/billdetail',item.bill_id])
  }
  onclose(){
    this._route.navigate(['menu/dashboard']);
  }
  ondelete(item){
    this._order.singleOrderdelete(item).subscribe(
      (data:product_class)=>{
        this.orderarr.splice(this.orderarr.indexOf(item),1)
        console.log(this.orderarr)
        this.ngOnInit();
      }
    );
}
onupdate(item)
{
  //this.x=this._acroute.snapshot.params['s_id'];
  console.log("hello")
  this._order.getallorderbyid(item.o_id).subscribe(
    (data:order_class)=>{
      console.log(data)
      this.o_id=data[0].o_id;
      this.o_price=data[0].o_price;
      this.o_date=data[0].o_date;
      this.fk_email_id=data[0].fk_email_id;
      this.fk_address=data[0].fk_address;
      this.o_mode=data[0].o_mode;
      this.status1=data[0].status1;
    }

  );
  this._order.updateorder(item).subscribe(
    (data:any)=>{
      this.orderarr.push(new order_class(this.o_price,this.o_date,this.fk_email_id,this.fk_address,this.status1,this.o_mode));
      console.log(data);
    }
  );
  this.ngOnInit();
}
  oncheck(item){
    console.log(item);
    this.ngOnInit();
    this.onupdate(item);
    this._loginser.getAllUserByEmail_id(item.fk_email_id).subscribe(
      (data:any)=>{
        console.log(data);
        this.fk_address=data[0].u_address;

      }
    );



    this.bill_details_arr.splice(0,this.bill_details_arr.length);
    this.bill_amt=this.o_price;
    console.log(item.o_mode);
    console.log(item.o_date,"newdateee")
    this._bill.addbill(new bill_class(item.o_price,item.fk_email_id,item.fk_address,item.o_mode,item.Date)).subscribe(
        (data:any)=>{
          this.insertId=data.insertId;
          console.log(data)
          this._orderdetail.getorderdetails(item.o_id).subscribe(
            (data:any)=>
            {
              console.log(data)
              for(this.i=0;this.i<data.length;this.i++)
              {
                console.log(data)
                this.fk_p_id=data[this.i].fk_p_id;
                this.price=data[this.i].price;
                this.qty=data[this.i].fk_p_qty;
                console.log(item.fk_email_id,"usrnuemail")
                this.bill_details_arr.push(new billdetail_class(this.insertId,this.fk_p_id,this.price,this.qty,item.fk_email_id,item.Date))
                //console.log(this.insertId,this.fk_p_id,this.qty,this.price);
              }
              this._billdetail.addbilldetail(this.bill_details_arr).subscribe(
                (data:any)=>{
                    console.log(data,"BILLDETAIL");
                }
              );
            }
          );
          alert("Successfully Added");
          //this.ondelete(item);


          this.ngOnInit();

        }
    );

  }
  checkchange(item:order_class){
    if(this.delarr.find(x=>x==item)){
      this.delarr.splice(this.delarr.indexOf(item),1)
    }
    else
    {
      this.delarr.push(item)
    }
    console.log(this.delarr)
}
  oncancel()
  {
    this._order.deleteallorder(this.delarr).subscribe(
      (x:any)=>{
      for(this.i=0;this.i<this.delarr.length;this.i++){
          if(this.orderarr.find(x=>x==this.delarr[this.i])){
              this.orderarr.splice(this.orderarr.indexOf(this.delarr[this.i]),1);
            console.log(this.orderarr)
          }
        }
        this.dataSource.data=this.orderarr;
      }
    );
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
