import { Component, OnInit } from '@angular/core';
import { supplier_class } from '../Classes/supplier';
import { SupplierService } from '../services/supplier.service';
import { Router,ActivatedRoute } from '@angular/router';
import { SUPPLIER_class } from '../Classes/supplier_class';


@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})
export class UpdateSupplierComponent implements OnInit {
  s_id:number;
  s_name:string;
  fk_p_id:number;
  s_mno:number;
  s_address:string;
  x:string;
  constructor(private _route:Router,private _service:SupplierService,private _acroute:ActivatedRoute) { }
  onsave(){
    this._service.updatesupplier(new SUPPLIER_class(this.s_name,this.fk_p_id,this.s_mno,this.s_address,this.s_id)).subscribe(
      (data:SUPPLIER_class[])=>{
        console.log(data);
        this._route.navigate(['menu/supplier'])
      }
    );
  }
  oncancel(){
    this._route.navigate(['menu/supplier']);
  }
  ngOnInit() {
    this.x=this._acroute.snapshot.params['s_id'];
    this._service.getAllsupplierByid(this.x).subscribe(
      (data:supplier_class[])=>{
        console.log(data)
        this.s_id=data[0].s_id;
        this.s_name=data[0].s_name;
        this.fk_p_id=data[0].fk_p_id;
        this.s_mno=data[0].s_mno;
        this.s_address=data[0].s_address;
      }
    );
  }

}
