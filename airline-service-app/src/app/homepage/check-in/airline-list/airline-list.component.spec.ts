import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ServiceService } from 'src/app/core/services/service.service';
import * as Rx from 'rxjs';

import { AirlineListComponent } from './airline-list.component';
import { delay } from 'rxjs/operators';

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
    const component1 = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(ServiceService);
    spyOn(service, 'getFlightDetails').and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    component1.getFlightDetails();
    tick(100);
    expect(component1.flights).toEqual([]);
  }));

  it('should call getFlightDetailsById and get response as empty array', fakeAsync(() => {
    const component2 = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(ServiceService);
    spyOn(service, 'getFlightDetailsById').and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    component2.getFlightDetailsById();
    tick(100);
    expect(component2.flightsSelected).toEqual([]);
  }));
});
