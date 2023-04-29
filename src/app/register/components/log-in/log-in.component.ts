import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { User } from '../../Model/user';
import {UsersService } from '../../Services/users.service' ;


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  email:string="";
  password:string="";
  checkUser=new User ('','','');
  check:any;
  error:any;
  newUser:User;


  Login(login:any)
  {
    console.log(login);
    this.email=login.value.email;
    this.password=login.value.password;
    this.newUser = new User("", this.email, this.password);

    this.UserSer.LoginUser(this.newUser).subscribe(a=>{
      this.toaster.success(`Welcom ${a.displayName} in Our Website`);
      localStorage.setItem("token",a.token);
      this.route.navigateByUrl("");
    })

  }




  constructor(public UserSer:UsersService,public route:Router,private auth:AuthGuardService,private toaster:ToastrService) {}

  ngOnInit(): void {
  }

}
