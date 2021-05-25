import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PassengerListComponent } from './components/passenger-list/passenger-list.component';
import { AddPassengerComponent } from './components/modals/add-passenger/add-passenger.component';
import { EditPassengerComponent } from './components/modals/edit-passenger/edit-passenger.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InFlightComponent } from '../homepage/in-flight/in-flight.component';
import { CheckInComponent } from '../homepage/check-in/check-in.component';
import { RouterModule } from '@angular/router';
import { PassengerDetailsComponent } from './components/modals/passenger-details/passenger-details.component';
import { SeatMapComponent } from './components/seat-map/seat-map.component';
import { StoreModule } from '@ngrx/store';
import { PASSENGER_STATE_NAME } from '../core/store/selectors/passenger.selector';
import { PassengerReducer } from '../core/store/reducers/passenger.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PassengerEffects } from '../core/store/effects/passenger.effect';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PassengerListComponent,
    AddPassengerComponent,
    EditPassengerComponent,
    PassengerDetailsComponent,
    SeatMapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature(PASSENGER_STATE_NAME, PassengerReducer),
    EffectsModule.forFeature([PassengerEffects])
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PassengerListComponent,
    AddPassengerComponent,
    SeatMapComponent
  ],
  entryComponents: [
    InFlightComponent,
    CheckInComponent
  ]
})
export class SharedModule { }
