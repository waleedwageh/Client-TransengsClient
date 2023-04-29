// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { catchError } from 'rxjs/operators';
// import { HandleErrorService } from 'src/app/core/handle-error.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class LocationService {
//   longitude: number;
//   latitude: number;
//   CountryName: any;

//   constructor(
//     private http: HttpClient,
//     private handleerrorservice: HandleErrorService
//   ) {}
//   getCountryName() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         this.longitude = position.coords.longitude;
//         this.latitude = position.coords.latitude;
//       });
//     }
//     return this.http.get(
//       `http://maps.googleapis.com/maps/api/geocode/json?latlng=${this.latitude.toString()},${this.longitude.toString()}&sensor=false`
//     );
//   }
//   getIpAddress() {
//     return this.http
//       .get('https://api.ipify.org/?format=json')
//       .pipe(catchError(this.handleerrorservice.handleError));
//   }
//   getGEOLocation(ip) {
//     // Update your api key to get from https://ipgeolocation.io
//     let url =
//       'https://api.ipgeolocation.io/ipgeo?apiKey=36af9b44f2e242aebe8b433b74556071&ip=' +
//       ip;
//     return this.http
//       .get(url)
//       .pipe(catchError(this.handleerrorservice.handleError));
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


declare const L:any;

interface Location {
  latitude:string;
  longitude:string;
  country_name:string;
  city:string;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  constructor(private http:HttpClient) { }

  getUserLocation() {
    return this.http.get<Location>('https://ipapi.co/json/')
  }


  getMap()
  {
    if (!navigator.geolocation) {
      console.log("location is not supported");

    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coord = position.coords;

      console.log(`lat: ${position.coords.latitude}, long: ${position.coords.longitude}`);

      let mymap = L.map('map').setView([coord.latitude, coord.longitude], 13);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9oYW1lZGdlbmFpZHUiLCJhIjoiY2tyaHFpdzZuMGZwNTMxbzVocmcxNWV1MCJ9.pMKbPeTXX5v9cKU9TyA1fA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'
      }).addTo(mymap);
      let marker = L.marker([coord.latitude, coord.longitude]).addTo(mymap);


    });
    this.watchPosition();

  }

  watchPosition() {
    let deslatitiude = 0;
    let deslongtiude = 0;
    let id = navigator.geolocation.watchPosition((position) => {
    console.log(`lat: ${position.coords.latitude}, long: ${position.coords.longitude}`);

    if (position.coords.latitude === deslatitiude) {
      navigator.geolocation.clearWatch(id);
    }

    }, (err) => {
      console.log(err);

    }, {
      enableHighAccuracy:false,
      timeout:5000,
      maximumAge:0
    }
    );

  
  }


}
