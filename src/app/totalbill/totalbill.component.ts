import { Component, OnInit,ViewChild } from '@angular/core';
import { TotalbillService } from '../services/totalbill.service';
import { Router } from '@angular/router';
import { bill_class } from '../Classes/bill';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';

@Component({
  selector: 'app-totalbill',
  templateUrl: './totalbill.component.html',
  styleUrls: ['./totalbill.component.css']
})
export class TotalbillComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) Sort:MatSort;
  bill_amt:number;
  date:Date;
  fk_email_id:number;
  billarr:bill_class[]=[];
  constructor(private _bill:TotalbillService,private _route:Router) { }
  dataSource=new MatTableDataSource(this.billarr)
  displayedColumns:string[] = ['fk_email_id','bill_amt','date','action'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onclickdone(item){
     this._route.navigate(['menu/billdetail',item.bill_id])
  }
  ngOnInit() {
    this._bill.getallbill().subscribe(
      (data:any)=>{
        console.log(data);
        this.billarr=data;
        this.dataSource= new MatTableDataSource(this.billarr);    
        this.dataSource.paginator = this.paginator;
       this.dataSource.sort=this.Sort;
      }
    );
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
