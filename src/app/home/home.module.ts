import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ComponentsComponent } from './components/components.component';
import { AboutComponent } from './Components/about/about.component';
import { ExploreNearbtComponent } from './Components/explore-nearbt/explore-nearbt.component';
import { PlacesComponent } from './Components/places/places.component';
import { HotelsComponent } from './Components/hotels/hotels.component';
import { GalaryComponent } from './Components/galary/galary.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { MainSectionComponent } from './Components/main-section/main-section.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ AboutComponent, ExploreNearbtComponent, PlacesComponent, HotelsComponent, GalaryComponent, ContactUsComponent, HomeComponent, MainSectionComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[HomeComponent]

})
export class HomeModule { }
