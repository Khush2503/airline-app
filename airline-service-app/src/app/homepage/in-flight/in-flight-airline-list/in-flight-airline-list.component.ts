import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/core/models/flight';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-in-flight-airline-list',
  templateUrl: './in-flight-airline-list.component.html',
  styleUrls: ['./in-flight-airline-list.component.scss']
})
export class InFlightAirlineListComponent implements OnInit {

  flights: Flight[];
  flightsSelected: Flight[];
  flightDetails: Flight;
  checkIn = false;

  constructor(private service: ServiceService) { }

  /**
   * on init
   */
  ngOnInit(): void {
    this.getFlightDetails();
  }

  /**
   * Gets flight details
   */
  getFlightDetails() {
    this.service.getFlightDetails().subscribe((data: Flight[]) => {
      this.flights = data;
    });
  }

  /**
   * Gets flight details by id
   * @param flightNumber 
   */
  getFlightDetailsById(flightNumber: string) {
    this.service.getFlightDetailsById(flightNumber).subscribe((data: Flight[]) => {
      this.flightsSelected = data;
    });
  }

  /**
   * Gets flight by id
   * @param id 
   */
  getFlightById(id: number) {
    this.service.getFlight(id).subscribe((data: Flight) => {
      this.flightDetails = data;
    });
  }

}
