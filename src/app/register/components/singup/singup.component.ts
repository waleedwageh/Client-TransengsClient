import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../Model/user';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
  fullName: string = "";
  email: string = "";
  password: string = "";
  conPassword: string = "";
  newUser: User;
  regex: RegExp;
  validatormessage: string;
  @ViewChild('signUp') signUpForm: NgForm;



user :User;



  SignUp(sign: any) {
    this.fullName = sign.value.fullName;
    this.email = sign.value.email;
    this.password = sign.value.password;
    this.newUser = new User(this.fullName, this.email, this.password);


   this.UsSer.AddNewUser(this.newUser).subscribe(a=>{
     this.toastr.success("Sign Up Successful")
      this.route.navigateByUrl("/login");
     
   })

  }


  ngOnInit(): void {
  }


    IsValidPass(){

      const pass = this.signUpForm.value.password;

      if (pass.length < 8) {

        this.validatormessage = 'Password must contain at least 8 charater';

        return false;

      }

      this.regex = new RegExp('[a-z]');

      if (!this.regex.test(pass)) {

        this.validatormessage = 'Password must contain a small letter';

        return false;

      }

      this.regex = new RegExp('[A-Z]');

      if (!this.regex.test(pass)) {

        this.validatormessage = 'Password must contain a capital letter';

        return false;

      }

      this.regex = new RegExp('[~!@#$%^&*()<>]');

      if (!this.regex.test(pass)) {

        this.validatormessage = 'Password must contain a special character';

        return false;

      }

      this.regex = new RegExp('[0-9]');

      if (!this.regex.test(pass)) {

        this.validatormessage = 'Password must contain number';

        return false;

      }
      this.validatormessage = "";
      return true;


    }

    constructor(public UsSer: UsersService, public route: Router, public toastr : ToastrService) { }
  }
  //   ngOnInit(): void {
  //   }


