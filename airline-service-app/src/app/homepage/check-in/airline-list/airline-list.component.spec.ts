import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ServiceService } from 'src/app/core/services/service.service';
import * as Rx from 'rxjs';

import { AirlineListComponent } from './airline-list.component';
import { delay } from 'rxjs/operators';
import { Flight } from 'src/app/core/models/flight';

describe('AirlineListComponent', () => {
  let component: AirlineListComponent;
  let fixture: ComponentFixture<AirlineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlineListComponent ],
      imports: [HttpClientTestingModule],
      providers: [ServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getFlightDetails and get response as empty array', fakeAsync(() => {
    const fixture = TestBed.createComponent(AirlineListComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(ServiceService);
    const spy_getPosts = spyOn(service, 'getFlightDetails').and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    component.getFlightDetails();
    tick(100);
    expect(component.flights).toEqual([]);
  }));

  it('should call getFlightDetailsById and get response as empty array', fakeAsync(() => {
    const fixture = TestBed.createComponent(AirlineListComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(ServiceService);
    const spy_getPosts = spyOn(service, 'getFlightDetailsById').and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    component.getFlightDetailsById();
    tick(100);
    expect(component.flightsSelected).toEqual([]);
  }));

});
