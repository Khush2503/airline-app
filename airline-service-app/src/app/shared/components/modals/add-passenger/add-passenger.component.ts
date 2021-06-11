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

  @Input() flight_id: string;

  constructor(
    private fb: FormBuilder,
    private service: ServiceService
  ) { }

  createForm: FormGroup;
  passenger: Passenger;

  ngOnInit(): void {
    this.createForm = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      passport_number: [null],
      birth_date: [null],
      address: [null],
      flight_id: [this.flight_id],
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
<<<<<<< HEAD
=======
    this.service.addPassenger(this.passenger).subscribe((data: Passenger) => {
      console.log(data);
    });
>>>>>>> 5e7476b6db76d79bb564d42a62e194e11f944dd3
    this.createForm.reset();
  }

}
