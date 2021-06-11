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

  @Input() flightId: string;
  passengers: Passenger[] = [];
  passenger: Passenger;
  idPassenger: number;
  isAdmin: boolean;
  isStaff: boolean;

  constructor(
    private service: ServiceService,
    private localStorageService: LocalStorageService) { }

  /**
   * on init
   */
  ngOnInit(): void {
    this.getPassengers();
    if (this.localStorageService.retrieve('user').username === 'Admin25') {
      this.isAdmin = true;
    }
    else {
      this.isStaff = true;
    }
  }

  /**
   * Gets passengers
   */
  getPassengers() {
    this.service.getPassengers(this.flightId).subscribe((data: Passenger[]) => {
      this.passengers = data;
    });
  }

  /**
   * Gets passengers by passport
   */
  getPassengersByPassport() {
    this.service
      .getPassengers(this.flightId)
      .pipe(map((x) => x.filter((u) => u.passportNumber === null)))
      .subscribe((data) => (this.passengers = data));
  }

  /**
   * Gets passengers by address
   */
  getPassengersByAddress() {
    this.service
      .getPassengers(this.flightId)
      .pipe(map((x) => x.filter((u) => u.address === null)))
      .subscribe((data) => (this.passengers = data));
  }

  /**
   * Gets passengers by dob
   */
  getPassengersByDOB() {
    this.service
      .getPassengers(this.flightId)
      .pipe(map((x) => x.filter((u) => u.birthDate === null)))
      .subscribe((data) => (this.passengers = data));
  }

  /**
   * Gets passengers checked in
   */
  getPassengersCheckedIn() {
    this.service
      .getPassengers(this.flightId)
      .pipe(map((x) => x.filter((u) => u.checkedIn === 'yes')))
      .subscribe((data) => (this.passengers = data));
  }

  /**
   * Gets passengers not checked in
   */
  getPassengersNotCheckedIn() {
    this.service
      .getPassengers(this.flightId)
      .pipe(map((x) => x.filter((u) => u.checkedIn === 'no')))
      .subscribe((data) => (this.passengers = data));
  }

  /**
   * Gets passengers infants
   */
  getPassengersInfants() {
    this.service
      .getPassengers(this.flightId)
      .pipe(map((x) => x.filter((u) => u.infants === 'yes')))
      .subscribe((data) => (this.passengers = data));
  }

  /**
   * Gets passengers wheel chair
   */
  getPassengersWheelChair() {
    this.service
      .getPassengers(this.flightId)
      .pipe(map((x) => x.filter((u) => u.wheelChair === 'yes')))
      .subscribe((data) => (this.passengers = data));
  }

  /**
   * Gets passenger
   * @param object 
   */
  getPassenger(object: Passenger) {
    this.passenger = object;
    this.idPassenger = this.passenger.id;
  }

  /**
   * Determines whether refresh on
   */
  onRefresh() {
    this.getPassengers();
  }

}
