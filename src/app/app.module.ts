import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';

import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {ExploreModule} from './explore/explore.module';
import {HomeModule} from './home/home.module';
import {RegisterModule} from './register/register.module'
import { RouterLink, RouterModule } from '@angular/router';
import { ErrorInterceptorService } from './core/Interceptors/error-interceptor.service';
import {ToastrModule} from 'ngx-toastr'
import { AgmCoreModule } from '@agm/core';
import { animation } from '@angular/animations';
import { HostModule } from './host/host/host.module';

//import {SharedModule} from './shared/shared/shared.module'



@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ExploreModule,
    HomeModule,
    RegisterModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    HostModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right',
      preventDuplicates:true
    }),
    ExploreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCgoOr6OO93EA_lObLJzxlaW0-4MwKiPl0'
    }),
    

  ],


  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
