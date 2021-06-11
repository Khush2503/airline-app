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
  checkIn = true;

  constructor(private service: ServiceService) { }

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
   * @param num 
   */
  getFlightDetailsById(num: string) {
    this.service.getFlightDetailsById(num).subscribe((data: Flight[]) => {
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
