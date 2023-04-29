import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/shared/services/location.service';
import { ProperityType } from '../../properity-type';
import { HomeService } from '../Services/home.service';
import { ProperityTypeService } from '../Services/properity-type.service';
import { State } from '../state';

@Component({
  selector: 'app-explore-nearbt',
  templateUrl: './explore-nearbt.component.html',
  styleUrls: ['./explore-nearbt.component.scss']
})
export class ExploreNearbtComponent implements OnInit {
  state: State[] = [];
  title:string;
  constructor(public staSer: HomeService,private map:LocationService,private router:Router ) { }

  ngOnInit(): void {
    this.map.getUserLocation().subscribe(data => {

      console.log(data);
      this.title = data.country_name;
    });
    this.staSer.GetAllState(this.title).subscribe(a => {
      this.state = a;
    });


  }

}
