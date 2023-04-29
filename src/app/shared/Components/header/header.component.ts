import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { publish } from 'rxjs/operators';
import { User } from 'src/app/register/Model/user';
import { UsersService } from 'src/app/register/Services/users.service';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  CheReg:boolean;
  CurrentUser:Observable<User>;
  logOut()
  {
    localStorage.removeItem("token");
    this.router.navigateByUrl("")

  }



  constructor(public auth:AuthGuardService,private router:Router,private userservice:UsersService)
  {
     this.CheReg=this.auth.canActivate();
  }

  ngOnInit(): void {
   this.CurrentUser = this.userservice.CurrentUser$;
  }

}
