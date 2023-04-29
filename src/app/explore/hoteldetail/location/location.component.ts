// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-location',
//   templateUrl: './location.component.html',
//   styleUrls: ['./location.component.scss']
// })
// export class LocationComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { LocationService } from'../../../shared/services/location.service';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss']
  })
  export class LocationComponent implements OnInit {
  title:string = '';

  lat:any = '';
  lng:any = '';

  location:any;

  constructor(private map:LocationService) {

  }

  ngOnInit() {
    this.map.getUserLocation().subscribe(data => {

      console.log(data);
      this.lat= data.latitude;
      this.lng= data.longitude;
      this.title = data.country_name;
    })
  }
}
