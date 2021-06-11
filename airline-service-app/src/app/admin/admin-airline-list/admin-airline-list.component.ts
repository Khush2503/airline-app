import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Flight } from 'src/app/core/models/flight';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-admin-airline-list',
  templateUrl: './admin-airline-list.component.html',
  styleUrls: ['./admin-airline-list.component.scss']
})
export class AdminAirlineListComponent implements OnInit {

  flights: Flight[];
  flightsSelected: Flight[];
  addService = false;
  addItem = false;
  flightDetails: Flight;

  formService = this.fb.group({
    service: [null, Validators.required]
  });

  formItem = this.fb.group({
    item: [null, Validators.required]
  });

  constructor(private service: ServiceService, private fb: FormBuilder) { }

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
   * Services form
   */
  serviceForm() {
    this.addService = !this.addService;
  }

  /**
   * Items form
   */
  itemForm() {
    this.addItem = !this.addItem;
  }

  /**
   * Saves service
   * @param flight 
   */
  saveService(flight: Flight) {
    this.addService = !this.addService;
    flight.ancillaryServices.push(this.formService.value.service);
    this.service.editFlight(flight.id, flight).subscribe((data: Flight) => {
    });
    this.getFlightById(flight.id);
  }

  /**
   * Saves item
   * @param flight 
   */
  saveItem(flight: Flight) {
    this.addItem = !this.addItem;
    flight.shopItems.push(this.formItem.value.item);
    this.service.editFlight(flight.id, flight).subscribe((data: Flight) => {
    });
    this.getFlightById(flight.id);
  }

  /**
   * Deletes service
   * @param service 
   * @param flight 
   */
  deleteService(service: string, flight: Flight) {
    flight.ancillaryServices.forEach((value, index) => {
      if (value === service) {
        flight.ancillaryServices.splice(index, 1);
      }
    });
    this.service.editFlight(flight.id, flight).subscribe((data: Flight) => {
    });
    this.getFlightById(flight.id);
  }

  /**
   * Deletes item
   * @param item 
   * @param flight 
   */
  deleteItem(item: string, flight: Flight) {
    flight.shopItems.forEach((value, index) => {
      if (value === item) {
        flight.shopItems.splice(index, 1);
      }
    });
    this.service.editFlight(flight.id, flight).subscribe((data: Flight) => {
    });
    this.getFlightById(flight.id);
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
