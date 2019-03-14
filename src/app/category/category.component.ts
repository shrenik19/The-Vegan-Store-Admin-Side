import { Component, OnInit,ViewChild } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { category_class } from '../Classes/category';
import { Router,ActivatedRoute } from '@angular/router';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) Sort:MatSort;

  cat_name:string;
  cat_id:number;
  catarr:category_class[]=[];
  delarr:category_class[]=[];
  i:number=0;
  flag:boolean=false;

  constructor(private _actroute:ActivatedRoute,private _route:Router,private _catser:CategoryService) { }
  dataSource=new MatTableDataSource(this.catarr)
  displayedColumns:string[] = ['Action','cat_name','Edit'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



onupdate(item){
  this._route.navigate(['menu/update-cat',item.cat_id]);
}
ondeletecat(item:category_class){
  this._catser.deletecatByID(item).subscribe(
    (data:category_class)=>{
      this.catarr.splice(this.catarr.indexOf(item),1)
      console.log(this.catarr)
      this.ngOnInit();
    }
  );

}
  checkchange(item:category_class){
    if(this.delarr.find(x=>x==item)){
      this.delarr.splice(this.delarr.indexOf(item),1)
    }
    else
    {
      this.delarr.push(item)
    }
    console.log(this.delarr)
  }

  ondelete(){
    this._catser.deletecat(this.delarr).subscribe(
      (x:any)=>{
        for(this.i=0;this.i<this.delarr.length;this.i++){
          if(this.catarr.find(x=>x==this.delarr[this.i])){
            this.catarr.splice(this.catarr.indexOf(this.delarr[this.i]),1);
          }
        }
        this.dataSource.data=this.catarr;
      }
    );
  }
  onAdd(){
    if(this.flag){
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }
  }
  ngOnInit() {
    this._catser.getAllcat().subscribe(
      (data:any)=>{
        this.catarr=data;
        this.dataSource= new MatTableDataSource(this.catarr);
         this.dataSource.paginator = this.paginator;
        this.dataSource.sort=this.Sort;
      }

    );

     if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
     }


  }

  onaddcat(){
    this._catser.addcat(new category_class(this.cat_name)).subscribe(
      (data:category_class[])=>{
        console.log(data);
        this.catarr.push(new category_class(this.cat_name));
        this.ngOnInit();
      });
      this.flag=false;
  }

  oncancel(){
    this.flag=false;
  }



}
