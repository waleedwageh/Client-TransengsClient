import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProperityType } from '../../properity-type';
import { ProperityTypeService } from '../Services/properity-type.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  properityType:ProperityType[]=[];

  constructor(public PropSer: ProperityTypeService,private router:Router) { }




  ngOnInit(): void {
    this.PropSer.GetPropType().subscribe(a=>{
      this.properityType=a;
    })
  }

}
