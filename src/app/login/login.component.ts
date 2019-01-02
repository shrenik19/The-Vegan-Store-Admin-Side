import { Component, OnInit } from '@angular/core';
import { info_class } from '../Classes/info';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  infoarr:info_class[]=[];
  email_id:string;
  password:string;
  u_type:string;
  flag:boolean=true;
  
  constructor(private _loginser:LoginService,private _r:Router) { }
  onsignup(){
    this._r.navigate(['/signup'])
  }
  
  onLogin(){
    console.log(this.email_id,this.password);
    this._loginser.getUserLogin(new info_class(this.email_id,this.password)).subscribe(
      (data:any[])=>{
        console.log(data);
        if(data.length>0)
        {
          localStorage.setItem('email_id',this.email_id);
        prompt("","Login Successfully");
        console.log(this.u_type);
        console.log(localStorage.getItem('email_id'))
           this._r.navigate(['menu'])
        }
        else
        {
          prompt("","Invalid Password or Email_id");
        }
      }
    );
}
  ngOnInit() {
  }
  onforget(){
    this._r.navigate(['/forget'])
  }
}
