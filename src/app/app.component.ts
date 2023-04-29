import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './register/Services/users.service';
import { AuthGuardService } from './shared/services/auth-guard.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'Client';
  constructor(private http:HttpClient,private userservice:UsersService){

  }
  ngOnInit(): void {
    this.Loadcurrentuser();
  }
  Loadcurrentuser(){
    this.userservice.loadCurrentUser().subscribe(res=>{
      console.log('user loaded');
    });
  }
}
