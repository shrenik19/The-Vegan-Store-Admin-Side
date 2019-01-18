import { Component, OnInit,ViewChild } from '@angular/core';
import { BilldetailService } from '../services/billdetail.service';
import { ActivatedRoute,Router } from '@angular/router';
import { billProduct_class } from '../Classes/billProduct';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';


@Component({
  selector: 'app-billdetail',
  templateUrl: './billdetail.component.html',
  styleUrls: ['./billdetail.component.css']
})
export class BilldetailComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) Sort:MatSort;
id:number;
arr:billProduct_class[]=[];
  constructor(private _billdetail:BilldetailService,private _route:Router,private _actroute:ActivatedRoute) { }
  dataSource=new MatTableDataSource(this.arr)
  displayedColumns:string[] = ['p_img','p_name','p_price','qty'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  oncancel(){
    this._route.navigate(['menu/totalbill']);
 }
  ngOnInit() {
    this.id=this._actroute.snapshot.params['bill_id'];
    this._billdetail.getbilldetails(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.arr=data;
        this.dataSource= new MatTableDataSource(this.arr);    
        this.dataSource.paginator = this.paginator;
       this.dataSource.sort=this.Sort;
      }
     
    );
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
