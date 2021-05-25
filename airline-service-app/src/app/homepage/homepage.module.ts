import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { CheckInComponent } from './check-in/check-in.component';
import { InFlightComponent } from './in-flight/in-flight.component';
import { SharedModule } from '../shared/shared.module';
import { AirlineListComponent } from './check-in/airline-list/airline-list.component';
import { InFlightAirlineListComponent } from './in-flight/in-flight-airline-list/in-flight-airline-list.component';


@NgModule({
  declarations: [
    HomepageComponent,
    CheckInComponent,
    InFlightComponent,
    AirlineListComponent,
    InFlightAirlineListComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule
  ]
})
export class HomepageModule { }
