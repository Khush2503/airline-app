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

<<<<<<< HEAD
  @Input('flight_id') flight_id: string;
  @Input('check_in') check_in: boolean;
  @Input('passengers') passengers: Passenger[] = [];
=======
  @Input() flight_id: string;
  @Input() check_in: boolean;
  passengers: Passenger[] = null;
>>>>>>> 5e7476b6db76d79bb564d42a62e194e11f944dd3
  selectedPassenger: Passenger = new Passenger();

  seatNumber1 = ['A', 'B', 'C'];
  seatNumber2 = ['D', 'E', 'F'];
  seat = new Array(20);
  seat_number: string;
  addService = false;
  addItem = false;

  service_form = this.fb.group({
<<<<<<< HEAD
    service: [null, Validators.required]
  });

  item_form = this.fb.group({
    shop_item: [null, Validators.required]
=======
    'service': [null, Validators.required]
  });

  item_form = this.fb.group({
    'shop_item': [null, Validators.required]
>>>>>>> 5e7476b6db76d79bb564d42a62e194e11f944dd3
  });

  constructor(private service: ServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
<<<<<<< HEAD
=======
    this.getPassengers();
  }

  getPassengers() {
    this.service.getPassengers(this.flight_id).subscribe((data: Passenger[]) => { this.passengers = data; });
>>>>>>> 5e7476b6db76d79bb564d42a62e194e11f944dd3
  }

  onRefresh() {
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
<<<<<<< HEAD
=======
    this.getPassengers();
>>>>>>> 5e7476b6db76d79bb564d42a62e194e11f944dd3
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
  }

  saveItem(passenger: Passenger) {
    this.addItem = !this.addItem;
    passenger.items.push(this.item_form.value.shop_item);
    this.service.editPassenger(passenger.id, passenger).subscribe((data: Passenger) => {
    });
  }

  deleteService(service: string, passenger: Passenger) {
    passenger.services.forEach((value, index) => {
<<<<<<< HEAD
      if (value == service) {
=======
      if (value === service)
>>>>>>> 5e7476b6db76d79bb564d42a62e194e11f944dd3
        passenger.services.splice(index, 1);
      }
    });
    this.service.editPassenger(passenger.id, passenger).subscribe((data: Passenger) => {
    });
  }

  deleteItem(item: string, passenger: Passenger) {
    passenger.items.forEach((value, index) => {
<<<<<<< HEAD
      if (value == item) {
=======
      if (value === item)
>>>>>>> 5e7476b6db76d79bb564d42a62e194e11f944dd3
        passenger.items.splice(index, 1);
      }
    });
    this.service.editPassenger(passenger.id, passenger).subscribe((data: Passenger) => {
    });
  }

  editMealPreference(passenger: Passenger) {
    if (passenger.meal === 'Special') {
      passenger.meal = 'Normal';
    }
    else {
      passenger.meal = 'Special';
    }
    this.service.editPassenger(passenger.id, passenger).subscribe((data: Passenger) => {
    });
  }

  isSeatAllocated(x: string, y: number): boolean {
    this.seat_number = x.concat(y.toString());
    const len = this.passengers.filter(p => {
      if (p !== null) {
        return true;
      } else {
        return false;
      }
    }).length;
    if (len === 0) {
      return false;
    } else {
      return true;
    }
  }

  isCheckedIn(x: string, y: number): boolean {
    this.seat_number = x.concat(y.toString());
    const len = this.passengers.filter(p => {
      if (p.seat_number === this.seat_number && p.checked_in === 'yes') {
        return true;
      } else {
        return false;
      }
    }).length;
    if (len === 0) {
      return false;
    } else {
      return true;
    }
  }

  hasInfants(x: string, y: number): boolean {
    this.seat_number = x.concat(y.toString());
    const len = this.passengers.filter(p => {
      if (p.seat_number === this.seat_number && p.infants === 'yes') {
        return true;
      } else {
        return false;
      }
    }).length;
    if (len === 0) {
      return false;
    } else {
      return true;
    }
  }

  needWheelChair(x: string, y: number): boolean {
    this.seat_number = x.concat(y.toString());
    const len = this.passengers.filter(p => {
      if (p.seat_number === this.seat_number && p.wheel_chair === 'yes') {
        return true;
      } else {
        return false;
      }
    }).length;
    if (len === 0) {
      return false;
    } else {
      return true;
    }
  }

  mealPreference(x: string, y: number): boolean {
    this.seat_number = x.concat(y.toString());
    const len = this.passengers.filter(p => {
      if (p.seat_number === this.seat_number && p.meal === 'normal') {
        return true;
      } else {
        return false;
      }
    }).length;
    if (len === 0) {
      return false;
    } else {
      return true;
    }
  }

}
