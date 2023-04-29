import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogInBodyComponent } from './components/log-in/log-in-body/log-in-body.component';
import { SingupComponent } from './components/singup/singup.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LogInComponent,
    LogInBodyComponent,
    SingupComponent
  ],
  imports: [
    CommonModule,
    RouterModule ,
    FormsModule,
    HttpClientModule
    
  ],
  exports: [LogInComponent, SingupComponent]

})
export class RegisterModule { }
