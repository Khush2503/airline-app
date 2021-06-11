import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Passenger } from 'src/app/core/models/passenger';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent implements OnInit {

  editForm: FormGroup;
  @Input() idPassenger: number;
  passenger: Passenger = new Passenger();

  constructor(
    private fb: FormBuilder,
    private service: ServiceService
  ) { }

  /**
   * on init
   */
  ngOnInit(): void {

    this.editForm = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      passportNumber: [null, [Validators.required]],
      birthDate: [null, [Validators.required]],
      address: [null, [Validators.required]],
      flightId: [null, [Validators.required]],
      seatNumber: [null, [Validators.required]],
      checkedIn: [null, [Validators.required]],
      infants: [null, [Validators.required]],
      wheelChair: [null, [Validators.required]],
      ancillaryServices: [null, [Validators.required]]
    });


  }

  /**
   * Determines whether submit on
   */
  onSubmit() {
    this.passenger = this.editForm.value;
    this.service.editPassenger(this.idPassenger, this.passenger).subscribe((data: Passenger) => {
      this.passenger = data;
    });
    this.editForm.reset();
  }

  /**
   * Gets passenger
   */
  getPassenger() {
    this.service.getPassengerById(this.idPassenger).subscribe((data: Passenger) => {
      this.passenger = data;

      this.editForm.setValue({
        firstname: this.passenger.firstname,
        lastname: this.passenger.lastname,
        passportNumber: this.passenger.passportNumber,
        birth_date: this.passenger.birthDate,
        address: this.passenger.address,
        flightId: this.passenger.flightId,
        seatNumber: this.passenger.seatNumber,
        checkedIn: this.passenger.checkedIn,
        infants: this.passenger.infants,
        wheelChair: this.passenger.wheelChair,
        ancillaryServices: this.passenger.ancillaryServices
      });
    });
  }
}
