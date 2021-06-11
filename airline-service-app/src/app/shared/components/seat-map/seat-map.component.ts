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

  @Input() flightId: string;
  @Input() checkIn: boolean;
  passengers: Passenger[] = null;
  selectedPassenger: Passenger = new Passenger();

  seatNumber1 = ['A', 'B', 'C'];
  seatNumber2 = ['D', 'E', 'F'];
  seat = new Array(20);
  seatNumber: string;
  addService = false;
  addItem = false;

  serviceForm = this.fb.group({
    service: [null, Validators.required]
  });

  itemForm = this.fb.group({
    shop_item: [null, Validators.required]
  });

  constructor(private service: ServiceService, private fb: FormBuilder) { }

  /**
   * on init
   */
  ngOnInit(): void {
    this.getPassengers();
  }

  /**
   * Gets passengers
   */
  getPassengers() {
    this.service.getPassengers(this.flightId).subscribe((data: Passenger[]) => { this.passengers = data; });
  }

  /**
   * Determines whether refresh on
   */
  onRefresh() {
    this.getPassengers();
    this.selectedPassenger = null;
  }

  /**
   * Determines whether seat view on
   * @param x 
   * @param y 
   */
  onSeatView(x: string, y: number) {
    this.seatNumber = x.concat(y.toString());
    this.onRefresh();
    for (const passenger of this.passengers) {
      if (passenger.seatNumber === this.seatNumber) {
        this.selectedPassenger = passenger;
      }
    }
  }

  /**
   * Edits check in
   * @param passenger 
   */
  editCheckIn(passenger: Passenger) {
    if (passenger.checkedIn === 'yes') {
      passenger.checkedIn = 'no';
    }
    else {
      passenger.checkedIn = 'yes';
    }
    this.service.editPassenger(passenger.id, passenger).subscribe((data: Passenger) => {
    });
    this.getPassengers();
  }

  /**
   * Services form add
   */
  serviceFormAdd() {
    this.addService = !this.addService;
  }

  /**
   * Items form add
   */
  itemFormAdd() {
    this.addItem = !this.addItem;
  }

  /**
   * Saves service
   * @param passenger 
   */
  saveService(passenger: Passenger) {
    this.addService = !this.addService;
    passenger.services.push(this.serviceForm.value.service);
    this.service.editPassenger(passenger.id, passenger).subscribe((data: Passenger) => {
    });
    this.getPassengers();
  }

  /**
   * Saves item
   * @param passenger 
   */
  saveItem(passenger: Passenger) {
    this.addItem = !this.addItem;
    passenger.items.push(this.itemForm.value.shop_item);
    this.service.editPassenger(passenger.id, passenger).subscribe((data: Passenger) => {
    });
    this.getPassengers();
  }

  /**
   * Deletes service
   * @param service 
   * @param passenger 
   */
  deleteService(service: string, passenger: Passenger) {
    passenger.services.forEach((value, index) => {
      if (value === service) {
        passenger.services.splice(index, 1);
      }
    });
    this.service.editPassenger(passenger.id, passenger).subscribe((data: Passenger) => {
    });
    this.getPassengers();
  }

  /**
   * Deletes item
   * @param item 
   * @param passenger 
   */
  deleteItem(item: string, passenger: Passenger) {
    passenger.items.forEach((value, index) => {
      if (value === item) {
        passenger.items.splice(index, 1);
      }
    });
    this.service.editPassenger(passenger.id, passenger).subscribe((data: Passenger) => {
    });
    this.getPassengers();
  }

  /**
   * Edits meal preference
   * @param passenger 
   */
  editMealPreference(passenger: Passenger) {
    if (passenger.meal === 'Special') {
      passenger.meal = 'Normal';
    }
    else {
      passenger.meal = 'Special';
    }
    this.service.editPassenger(passenger.id, passenger).subscribe((data: Passenger) => {
    });
    this.getPassengers();
  }

  /**
   * Determines whether seat allocated is
   * @param x 
   * @param y 
   * @returns true if seat allocated 
   */
  isSeatAllocated(x: string, y: number): boolean {
    this.seatNumber = x.concat(y.toString());
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

}
