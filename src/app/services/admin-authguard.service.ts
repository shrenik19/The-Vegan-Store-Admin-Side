import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthguardService {

  constructor(private _route:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean{
    console.log(localStorage.getItem('email_id'));
    if(localStorage.getItem('email_id')=="")
    {
      alert("Page Not found")
      this._route.navigate[''];
    }
    else
    {
      return true;
    }
  }
  
}
