import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Passenger } from 'src/app/core/models/passenger';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-edit-passenger',
  templateUrl: './edit-passenger.component.html',
  styleUrls: ['./edit-passenger.component.scss']
})
export class EditPassengerComponent implements OnInit {

  editForm: FormGroup;
  @Input('id_passenger') id_passenger: number;
  passenger: Passenger = new Passenger();

  constructor(
    private fb: FormBuilder,
    private service: ServiceService
  ) { }

  ngOnInit(): void {

    this.editForm = this.fb.group({
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
      ancillary_services: [null, [Validators.required]]
    });


  }

  onSubmit() {
    this.passenger = this.editForm.value;
    this.service.editPassenger(this.id_passenger, this.passenger).subscribe((data: Passenger) => {
      this.passenger = data;
    })
    this.editForm.reset();
  }

  getPassengers() {
    this.service.getPassengerById(this.id_passenger).subscribe((data: Passenger) => {
      console.log("Passenger with ID : " + this.id_passenger + " : " + data);
      this.passenger = data;

      this.editForm.setValue({
        firstname: this.passenger.firstname,
        lastname: this.passenger.lastname,
        passport_number: this.passenger.passport_number,
        birth_date: this.passenger.birth_date,
        address: this.passenger.address,
        flight_id: this.passenger.flight_id,
        seat_number: this.passenger.seat_number,
        checked_in: this.passenger.checked_in,
        infants: this.passenger.infants,
        wheel_chair: this.passenger.wheel_chair,
        ancillary_services: this.passenger.ancillary_services
      });
    })
  }

}
