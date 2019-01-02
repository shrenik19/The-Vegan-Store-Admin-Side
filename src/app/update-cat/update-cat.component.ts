import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { category_class } from '../Classes/category';


@Component({
  selector: 'app-update-cat',
  templateUrl: './update-cat.component.html',
  styleUrls: ['./update-cat.component.css']
})
export class UpdateCatComponent implements OnInit {
  cat_id:number;
  cat_name:string;
  x:number;
  
  constructor(private _route:Router,private _acroute:ActivatedRoute,private _catser:CategoryService) { }

  onSave(){
    this._catser.updatecat(new category_class(this.cat_name,this.cat_id)).subscribe(
      (data:any)=>{
        console.log(data);
         this._route.navigate(['menu/category']);
      }
    );
      } 
    oncancel(){
      this._route.navigate(['menu/category']);
    }
  ngOnInit() {
    this.x=this._acroute.snapshot.params['cat_id'];
    this._catser.getAllcatById(this.x).subscribe(
          (data:category_class[])=>{
          console.log(data)
          this.cat_id=data[0].cat_id;
          this.cat_name=data[0].cat_name;
       }
     );
  }

}
