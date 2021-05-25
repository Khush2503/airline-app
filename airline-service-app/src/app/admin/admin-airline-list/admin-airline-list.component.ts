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
  addService: boolean = false;
  addItem: boolean = false;
  flightDetails: Flight;

  service_form = this.fb.group({
    "service": [null, Validators.required]
  });

  item_form = this.fb.group({
    "shop_item": [null, Validators.required]
  });

  constructor(private service: ServiceService, private fb: FormBuilder) { }

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

  serviceForm() {
    this.addService = !this.addService;
  }

  itemForm() {
    this.addItem = !this.addItem;
  }

  saveService(flight: Flight) {
    this.addService = !this.addService;
    flight.ancillary_services.push(this.service_form.value.service);
    this.service.editFlight(flight.id, flight).subscribe((data: Flight) => {
    });
    this.getFlightById(flight.id);
  }

  saveItem(flight: Flight) {
    this.addItem = !this.addItem;
    flight.shop_items.push(this.item_form.value.shop_item);
    this.service.editFlight(flight.id, flight).subscribe((data: Flight) => {
    });
    this.getFlightById(flight.id);
  }

  deleteService(service: string, flight: Flight) {
    flight.ancillary_services.forEach((value, index) => {
      if (value == service)
        flight.ancillary_services.splice(index, 1);
    });
    this.service.editFlight(flight.id, flight).subscribe((data: Flight) => {
    });
    this.getFlightById(flight.id);
  }

  deleteItem(item: string, flight: Flight) {
    flight.shop_items.forEach((value, index) => {
      if (value == item)
        flight.shop_items.splice(index, 1);
    });
    this.service.editFlight(flight.id, flight).subscribe((data: Flight) => {
    });
    this.getFlightById(flight.id);
  }

  getFlightById(id: number) {
    this.service.getFlight(id).subscribe((data: Flight) => {
      this.flightDetails = data;
    })
  }

}