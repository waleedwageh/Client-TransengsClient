import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostInsertComponent } from './Components/host-insert/host-insert.component';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';



@NgModule({
  declarations: [
    HostInsertComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule
  ]
})
export class HostModule { }
