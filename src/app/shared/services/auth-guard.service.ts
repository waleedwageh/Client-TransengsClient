import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  canActivate():boolean
  {
    var token =localStorage.getItem("token");
    if(token)
    {
      return true
    }
    this.rouer.navigateByUrl("/login");
    return false
  }
  constructor(private rouer:Router) { }
}
