import{NgModule} from'@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailComponent } from './hotel-detail.component';


const routes: Routes = [

  {path:"hoteldetails",component:HotelDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
