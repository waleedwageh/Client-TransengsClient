import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PropertyDetilesRoot } from 'src/app/shared/Models/PropertyDetilesRoot';
import { HoteldetailService } from '../services/hoteldetail.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {

  id: number;
  propertydetailroot: PropertyDetilesRoot;
  constructor(private route: ActivatedRoute, private propertyservice: HoteldetailService) {

  }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.propertyservice.GetPropertyDetail(params['id']).subscribe(
        res => {
          this.propertydetailroot = res;
          console.log(res);
        }
      )
    })
  }

}
