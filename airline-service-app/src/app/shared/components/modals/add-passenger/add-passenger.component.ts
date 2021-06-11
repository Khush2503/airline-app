import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/models/app.state';
import { Passenger } from 'src/app/core/models/passenger';
import { ServiceService } from 'src/app/core/services/service.service';
import { passenger } from 'src/app/core/store/actions/passenger.action';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.scss']
})
export class AddPassengerComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { }

  createForm: FormGroup;
  passenger: Passenger;

  ngOnInit(): void {
    this.createForm = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      passport_number: [null, [Validators.required]],
      birth_date: [null, [Validators.required]],
      address: [null, [Validators.required]],
      flight_id: [null, [Validators.required]],
      seat_number: [null, [Validators.required]],
      checked_in: [null, [Validators.required]],
      infants: [null, [Validators.required]],
      wheel_chair: [null, [Validators.required]],
      ancillary_services: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.passenger = this.createForm.value;
    this.passenger.meal = 'normal';
    this.passenger.services = ['wifi'];
    this.passenger.items = ['books'];
    this.createForm.reset();
    this.store.dispatch(passenger(this.passenger));
  }

}
