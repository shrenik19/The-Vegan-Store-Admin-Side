import { Component, OnInit } from '@angular/core';
import { info_class } from '../Classes/info';
import { MailService } from '../services/mail.service';
import { sendmail } from '../Classes/mail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  email_id:string;
  password:string;
subject1:string;
  constructor(private _mail:MailService,private _route:Router) { }

  ngOnInit() {
  }
onforget(){
  this._mail.getpassById(this.email_id).subscribe(
    (data:info_class[])=>{
      if(data.length>0){
        this.password=data[0].password;
        this._mail.sendmail(new sendmail(this.email_id,this.subject1,this.password)).subscribe(
          (data:sendmail[])=>{

          }
        );
       alert('Password will end on your mail');
       this._route.navigate(['']);
      }
      else
      {
        alert('Email_id is Not Correct');
      }
    }
  );
}
}
