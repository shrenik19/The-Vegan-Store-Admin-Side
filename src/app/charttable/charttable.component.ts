import { Component, OnInit,ViewChild } from '@angular/core';
import { OrderService } from "../services/order.service";
import { topfive_class } from '../Classes/topfive';
import { Chart } from 'chart.js';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-charttable',
  templateUrl: './charttable.component.html',
  styleUrls: ['./charttable.component.css']
})
export class CharttableComponent implements OnInit {
  i:number=0;
  chart = [];
  label=[];
  name=[];
  toparr=[];
  constructor(private _order:OrderService,private _route:Router) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) Sort:MatSort;

  dataSource=new MatTableDataSource(this.toparr)
  displayedColumns:string[] = ['p_img','p_name','p_price'];
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onclickback(){
    this._route.navigate(['menu/chartpage']);
  }
  

  ngOnInit() {
    this._order.topFive().subscribe(
      (data:any)=>{
          console.log(data);
          this.toparr=data;
          this.dataSource= new MatTableDataSource(this.toparr);    
          this.dataSource.paginator = this.paginator;
         this.dataSource.sort=this.Sort;
          
  });
}
}
