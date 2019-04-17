import { Component, OnInit } from '@angular/core';
import { OrderService } from "../services/order.service";
import { topfive_class } from '../Classes/topfive';
import { Chart } from 'chart.js';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chartpie',
  templateUrl: './chartpie.component.html',
  styleUrls: ['./chartpie.component.css']
})
export class ChartpieComponent implements OnInit {
  i:number=0;
  chart = [];
  label=[];
  name=[];
  toparr=[];
  pieChartLabels=[];
  pieChartData=[];
  pieChartType=[];

  barChartLabels=[];
  barChartType=[];
  barChartData=[];
  doughnutChartLabels=[];
  doughnutChartType=[];
  doughnutChartData=[];
  constructor(private _order:OrderService,private _route:Router) { }

  onclickback(){
    this._route.navigate(['menu/chartpage']);
  }

  ngOnInit() {

    this._order.topFive().subscribe(
      (data:any[])=>{
          console.log(data);
          this.toparr=data;
          console.log(this.toparr);
          for(this.i=0;this.i<this.toparr.length;this.i++)
          {
          this.name.push(this.toparr[this.i].p_name);
          this.label.push(this.i);
          }
        });
        this.pieChartLabels=this.name;
        this.pieChartData=[60,40,25,20];
        this.pieChartType='pie';


  }

}
