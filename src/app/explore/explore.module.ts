import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './hoteldetail/description/description.component';
import { RoomsComponent } from './hoteldetail/rooms/rooms.component';
import { LocationComponent } from './hoteldetail/location/location.component';
import { ReviewsComponent } from './hoteldetail/reviews/reviews.component';
import { HotelDetailComponent } from './hoteldetail/hotel-detail.component';
import { ExploreRoutingModule } from './hoteldetail/Explore-Routing';
import { MainSectionComponent } from './main-section/main-section.component';
import { ExpComponent } from './exp/exp.component';
import { AgmCoreModule } from '@agm/core';

import { ExsearchComponent } from './exp/expsearch/exsearch/exsearch.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating';
import {CarouselModule} from 'primeng/carousel';
import {InputNumberModule} from 'primeng/inputnumber';
import {CheckboxModule} from 'primeng/checkbox';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [DescriptionComponent,
    RoomsComponent,
    LocationComponent,
    ReviewsComponent,
    HotelDetailComponent,
    MainSectionComponent,
    ExpComponent,
    ExsearchComponent,
    
    
  ],
  imports: [
    // CommonModule,
    // ExploreRoutingModule,
    AgmCoreModule,
    CommonModule,
    ExploreRoutingModule,
    AgmCoreModule,
    BrowserAnimationsModule,
    CalendarModule,
    SharedModule,
    FormsModule,
    RatingModule,
    CarouselModule,
    InputNumberModule,
    CheckboxModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right',
      preventDuplicates:true
    })

  ],

  exports:[ExpComponent]
})
export class ExploreModule { }
