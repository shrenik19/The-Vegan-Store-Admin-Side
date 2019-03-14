import { Component, OnInit } from '@angular/core';
import { OrderService } from "../services/order.service";
import { topfive_class } from '../Classes/topfive';


@Component({
  selector: 'app-chartpage',
  templateUrl: './chartpage.component.html',
  styleUrls: ['./chartpage.component.css']
})
export class ChartpageComponent implements OnInit {
  i:number=0;
  public barChartOptions={
       scaleShowVerticalLines:false,
       responsive:true
     }
  public barChartLabels=['2006','2007','2008','2008','2009','2010','2011','2012'];
  public barChartType='bar';
  public barChartData=[
    {data: [12,23,45,65,45,78,45,45],label:'Series A'},
  ];
  

  public doughnutChartLabels=['Customer','Product'];
  public doughnutChartType='doughnut';
  
  public doughnutChartData=[2,2];
  constructor(private _order:OrderService) { }

  public pieChartLabels=['sales Q1','sales Q2','sales Q3'];
  public pieChartData=[45,52,78];
  public pieChartType='pie';
  
  ngOnInit() {
    this._order.topFive().subscribe(
      (data:any)=>{
        //this.barChartLabels=data.p_name;
        }
    );
  }
}
