import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Passenger } from 'src/app/core/models/passenger';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.scss']
})
export class SeatMapComponent implements OnInit {

  @Input() flight_id: string;
  @Input() check_in: boolean;
  passengers: Passenger[] = null;
  selectedPassenger: Passenger = new Passenger();

  seatNumber1 = ['A', 'B', 'C'];
  seatNumber2 = ['D', 'E', 'F'];
  seat = new Array(20);
  seat_number: string;
  addService = false;
  addItem = false;

  service_form = this.fb.group({
    'service': [null, Validators.required]
  });

  item_form = this.fb.group({
    'shop_item': [null, Validators.required]
  });

  constructor(private service: ServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getPassengers();
  }

  getPassengers() {
    this.service.getPassengers(this.flight_id).subscribe((data: Passenger[]) => { this.passengers = data; });
  }

  onRefresh() {
    this.getPassengers();
    this.selectedPassenger = null;
  }

  onSeatView(x: string, y: number) {
    this.seat_number = x.concat(y.toString());
    this.onRefresh();
    for (const passenger of this.passengers) {
      if (passenger.seat_number === this.seat_number) {
        this.selectedPassenger = passenger;
      }
    }
  }

  editCheckIn(passenger: Passenger) {
    if (passenger.checked_in === 'yes') {
      passenger.checked_in = 'no';
    }
    else {
      passenger.checked_in = 'yes';
    }
    this.service.editPassenger(passenger.id, passenger).subscribe((data: Passenger) => {
    });
    this.getPassengers();
  }

  serviceForm() {
    this.addService = !this.addService;
  }

  itemForm() {
    this.addItem = !this.addItem;
  }

  saveService(passenger: Passenger) {
    this.addService = !this.addService;
    passenger.services.push(this.service_form.value.service);
    this.service.editPassenger(passenger.id, passenger).subscribe((data: Passenger) => {
    });
    this.getPassengers();
  }

  saveItem(passenger: Passenger) {
    this.addItem = !this.addItem;
    passenger.items.push(this.item_form.value.shop_item);
    this.service.editPassenger(passenger.id, passenger).subscribe((data: Passenger) => {
    });
    this.getPassengers();
  }

  deleteService(service: string, passenger: Passenger) {
    passenger.services.forEach((value, index) => {
      if (value === service)
        passenger.services.splice(index, 1);
    });
    this.service.editPassenger(passenger.id, passenger).subscribe((data: Passenger) => {
    });
    this.getPassengers();
  }

  deleteItem(item: string, passenger: Passenger) {
    passenger.items.forEach((value, index) => {
      if (value === item)
        passenger.items.splice(index, 1);
    });
    this.service.editPassenger(passenger.id, passenger).subscribe((data: Passenger) => {
    });
    this.getPassengers();
  }

  editMealPreference(passenger: Passenger) {
    if (passenger.meal === 'Special') {
      passenger.meal = 'Normal';
    }
    else {
      passenger.meal = 'Special';
    }
    this.service.editPassenger(passenger.id, passenger).subscribe((data: Passenger) => {
    })
    this.getPassengers();
  }

}
