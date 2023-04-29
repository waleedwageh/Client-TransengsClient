import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyImage } from 'src/app/shared/Models/IPropertyImage';
import { Hoteldetail } from '../../Models/hoteldetail';
import { HoteldetailService } from '../../services/hoteldetail.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
@Input() images : PropertyImage[];
 // hotelDetail = new Hoteldetail();
    constructor(public ar:ActivatedRoute,public hoteldetailser:HoteldetailService ) {

   }

   ngOnInit(): void {
  }


}
