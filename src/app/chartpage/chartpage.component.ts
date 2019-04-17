import { Component, OnInit,ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chartpage',
  templateUrl: './chartpage.component.html',
  styleUrls: ['./chartpage.component.css']
})
export class ChartpageComponent implements OnInit {
  constructor(private _actroute:ActivatedRoute,private _route:Router) { }
  onclickpie(){
    this._route.navigate(['menu/chartpie']);
  }
  onclickdou(){
    this._route.navigate(['menu/chartdou']);
  }

  onclicktable(){
    this._route.navigate(['menu/charttable']);
  }

  ngOnInit() {
  }
}

// this._order.topFive().subscribe(
//   (data:any)=>{
//       console.log(data);
//       this.toparr=data;
//       console.log(this.toparr);
//       for(this.i=0;this.i<this.toparr.length;this.i++)
//       {
//       this.name.push(this.toparr[this.i].p_name);
//       this.label.push(this.i);
//       }
//     });
//     this.pieChartLabels=this.name;
//     this.pieChartData=[60,40,25];
//     this.pieChartType='pie';


//     this.doughnutChartLabels=this.name;
//     this.doughnutChartType='doughnut';
//     this.doughnutChartData=[60,40,25];



// this._order.topFive().subscribe(
//   (data:any)=>{
//       console.log(data);
//       this.toparr=data;

// this.dataSource= new MatTableDataSource(this.toparr);    
// this.dataSource.paginator = this.paginator;
// this.dataSource.sort=this.Sort;
//   });