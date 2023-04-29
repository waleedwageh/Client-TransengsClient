import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { LocationService } from 'src/app/shared/services/location.service';
import { HomeService } from '../Services/home.service';
// import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  city: string = '';
  country: string = '';
  ipaddress:string;
  longitude: number;
  latitude: number;
  CountryName:any;

  constructor(private locationservice: LocationService,private http :HttpClient)
   {

   }

  ngOnInit(): void {
   

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude=position.coords.latitude;
        this.longitude=position.coords.longitude
        this.http.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.latitude.toString()},${this.longitude.toString()}&sensor=false`
        ).subscribe(res=>{
          this.CountryName=res;
        });
      });
    }
 
    // console.log(this.CountryName);
    /* this.locationservice.getIpAddress().subscribe(res=>{
      this.ipaddress = res['ip'];
      this.locationservice.getGEOLocation(this.ipaddress).subscribe(res => {
        this.city = res['city'];
        this.country = res['country_code3'];
        
        console.log(res);
      }); */
    // });
  }
}
