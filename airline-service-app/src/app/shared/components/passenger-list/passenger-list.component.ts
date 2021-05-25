import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from 'src/app/core/models/passenger';
import { ServiceService } from 'src/app/core/services/service.service';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss']
})
export class PassengerListComponent implements OnInit {

  @Input('flight_id') flight_id: string;
  passengers: Passenger[] = [];
  passenger: Passenger;
  id_passenger: number;
  isAdmin: boolean;
  isStaff: boolean;

  constructor(private service: ServiceService,
    private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.getPassengers();
    if (this.localStorageService.retrieve('user').username === 'Admin25') {
      this.isAdmin = true;
    }
    else {
      this.isStaff = true;
    }
  }

  getPassengers() {
    this.service.getPassengers(this.flight_id).subscribe((data: Passenger[]) => {
      this.passengers = data;
    })
  }

  getPassengersByPassport() {
    this.service
      .getPassengers(this.flight_id)
      .pipe(map((x) => x.filter((u) => u.passport_number === null)))
      .subscribe((data) => (this.passengers = data));
  }

  getPassengersByAddress() {
    this.service
      .getPassengers(this.flight_id)
      .pipe(map((x) => x.filter((u) => u.address === null)))
      .subscribe((data) => (this.passengers = data));
  }

  getPassengersByDOB() {
    this.service
      .getPassengers(this.flight_id)
      .pipe(map((x) => x.filter((u) => u.birth_date === null)))
      .subscribe((data) => (this.passengers = data));
  }

  getPassengersCheckedIn() {
    this.service
      .getPassengers(this.flight_id)
      .pipe(map((x) => x.filter((u) => u.checked_in === "yes")))
      .subscribe((data) => (this.passengers = data));
  }

  getPassengersNotCheckedIn() {
    this.service
      .getPassengers(this.flight_id)
      .pipe(map((x) => x.filter((u) => u.checked_in === "no")))
      .subscribe((data) => (this.passengers = data));
  }

  getPassengersInfants() {
    this.service
      .getPassengers(this.flight_id)
      .pipe(map((x) => x.filter((u) => u.infants === "yes")))
      .subscribe((data) => (this.passengers = data));
  }

  getPassengersWheelChair() {
    this.service
      .getPassengers(this.flight_id)
      .pipe(map((x) => x.filter((u) => u.wheel_chair === "yes")))
      .subscribe((data) => (this.passengers = data));
  }

  getPassenger(object: Passenger) {
    this.passenger = object;
    this.id_passenger = this.passenger.id;
  }

  onRefresh() {
    this.getPassengers();
  }

}
