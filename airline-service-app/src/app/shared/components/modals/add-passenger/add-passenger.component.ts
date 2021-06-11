import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Passenger } from 'src/app/core/models/passenger';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.scss']
})
export class AddPassengerComponent implements OnInit {

  @Input() flightId: string;

  constructor(
    private fb: FormBuilder,
    private service: ServiceService
  ) { }

  createForm: FormGroup;
  passenger: Passenger;

  /**
   * on init
   */
  ngOnInit(): void {
    this.createForm = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      passportNumber: [null],
      birthDate: [null],
      address: [null],
      flightId: [this.flightId],
      seatNumber: [null, [Validators.required]],
      checkedIn: [null, [Validators.required]],
      infants: [null, [Validators.required]],
      wheelChair: [null, [Validators.required]],
      ancillaryServices: [null, [Validators.required]],
    });
  }

  /**
   * Determines whether submit on
   */
  onSubmit() {
    this.passenger = this.createForm.value;
    this.passenger.meal = 'normal';
    this.passenger.services = ['wifi'];
    this.passenger.items = ['books'];
    this.service.addPassenger(this.passenger).subscribe((data: Passenger) => {
      console.log(data);
    });
    this.createForm.reset();
  }

}
