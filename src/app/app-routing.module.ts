import{NgModule} from'@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelDetailComponent } from './explore/hoteldetail/hotel-detail.component';

import { ExpComponent } from './explore/exp/exp.component';

import { HomeComponent } from './home/Components/home/home.component';
import { LogInComponent } from './register/components/log-in/log-in.component';
import { SingupComponent } from './register/components/singup/singup.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { LocationComponent } from './explore/hoteldetail/location/location.component';
import { HostInsertComponent } from './host/host/Components/host-insert/host-insert.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LogInComponent},
  {path:"signup",component:SingupComponent},
  {path:"exp/:id",component:ExpComponent,canActivate:[AuthGuardService]},
  {path:"details/:id",component:HotelDetailComponent,canActivate:[AuthGuardService]},
  // {path:"exp",loadChildren:()=>{import('./explore/explore.module').then(m=>m.ExploreModule)}},
  {path:"hoteldetails",component:HotelDetailComponent},
  {path:"location",component:LocationComponent},
  {path:"host",component:HostInsertComponent,canActivate:[AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
