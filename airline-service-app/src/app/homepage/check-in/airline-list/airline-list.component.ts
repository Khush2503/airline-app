import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/core/models/flight';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.scss']
})
export class AirlineListComponent implements OnInit {

  flights: Flight[];
  flightsSelected: Flight[];
  flightDetails: Flight;
  check_in: boolean = true;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getFlightDetails();
  }

  getFlightDetails() {
    this.service.getFlightDetails().subscribe((data: Flight[]) => {
      this.flights = data;
    })
  }

  getFlightDetailsById(number: string) {
    this.service.getFlightDetailsById(number).subscribe((data: Flight[]) => {
      this.flightsSelected = data;
    })
  }

  getFlightById(id: number) {
    this.service.getFlight(id).subscribe((data: Flight) => {
      this.flightDetails = data;
    })
  }

}
