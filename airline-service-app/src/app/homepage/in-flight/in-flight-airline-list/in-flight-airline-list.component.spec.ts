import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ServiceService } from 'src/app/core/services/service.service';
import * as Rx from 'rxjs';

import { InFlightAirlineListComponent } from './in-flight-airline-list.component';
import { delay } from 'rxjs/operators';

describe('InFlightAirlineListComponent', () => {
  let component: InFlightAirlineListComponent;
  let fixture: ComponentFixture<InFlightAirlineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InFlightAirlineListComponent ],
      imports: [HttpClientTestingModule],
      providers: [ServiceService]
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

  it('should call getFlightDetails and get response as empty array', fakeAsync(() => {
    const fixture = TestBed.createComponent(InFlightAirlineListComponent);
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
    const fixture = TestBed.createComponent(InFlightAirlineListComponent);
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
