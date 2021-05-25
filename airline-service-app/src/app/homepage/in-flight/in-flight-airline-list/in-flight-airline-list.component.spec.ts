import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceService } from 'src/app/core/services/service.service';

import { InFlightAirlineListComponent } from './in-flight-airline-list.component';

describe('InFlightAirlineListComponent', () => {
  let component: InFlightAirlineListComponent;
  let fixture: ComponentFixture<InFlightAirlineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InFlightAirlineListComponent ],
      providers: [ServiceService, HttpClient, HttpHandler]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InFlightAirlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
