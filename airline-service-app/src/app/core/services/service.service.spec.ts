import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Flight } from '../models/flight';
import { TestBed, inject, async } from '@angular/core/testing';
import { LocalStorageService } from 'ngx-webstorage';
import { ServiceService } from './service.service';
import { User } from '../models/user';


describe('ServiceService', () => {
  let service: ServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [LocalStorageService]
    });
    service = TestBed.inject(ServiceService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch flights as an observable', async(inject([HttpTestingController, ServiceService],
    (httpClient: HttpTestingController, service: ServiceService) => {
      const flights = [
        {
          "id": 1,
          "source": "DEL",
          "src": "Delhi",
          "destination": "MUM",
          "dest": "Mumbai",
          "date": "22 May, 2021",
          "time": "14:20",
          "number": "1A",
          "partner": "Vistara Airlines",
          "route_Id": "ABC",
          "ancillary_services": [
            "wifi",
            "books",
            "drinks",
            "service"
          ],
          "shop_items": [
            "books",
            "pens",
            "chocolate"
          ]
        },
        {
          "id": 2,
          "source": "DEL",
          "src": "Delhi",
          "destination": "TRV",
          "dest": "Trivandrum",
          "date": "23 May, 2021",
          "time": "13:20",
          "number": "1B",
          "partner": "Vistara Airlines",
          "route_Id": "DEFGH",
          "ancillary_services": [
            "wifi",
            "drinks"
          ],
          "shop_items": [
            "books",
            "chocolates"
          ]
        },
        {
          "id": 3,
          "source": "DEL",
          "src": "Delhi",
          "destination": "BLR",
          "dest": "Bangalore",
          "date": "24 May, 2021",
          "time": "15:20",
          "number": "1C",
          "partner": "Vistara Airlines",
          "route_Id": "XYZ",
          "ancillary_services": [
            "drinks",
            "Wifi"
          ],
          "shop_items": [
            "pens",
            "chocolates",
            "magazine"
          ]
        },
        {
          "id": 4,
          "source": "DEL",
          "src": "Delhi",
          "destination": "HYD",
          "dest": "Hyderabad",
          "date": "25 May, 2021",
          "time": "19:20",
          "number": "1D",
          "partner": "Vistara Airlines",
          "route_Id": "MNOP",
          "ancillary_services": [
            "wifi",
            "drinks"
          ],
          "shop_items": [
            "books"
          ]
        }
      ];

      service.getFlightDetails()
        .subscribe((flights: Flight[]) => {
          expect(flights.length).toBe(4);
        });

      let req = httpMock.expectOne('http://localhost:3000/flights');
      expect(req.request.method).toBe("GET");

      req.flush(flights);
      httpMock.verify();
    })));

    it('should fetch users as an observable', async(inject([HttpTestingController, ServiceService],
      (httpClient: HttpTestingController, service: ServiceService) => {
        const users = [
          {
            "id": 1,
            "role": "Admin",
            "name": "",
            "username": "Admin25",
            "password": "Admin@2503"
          },
          {
            "id": 2,
            "role": "Staff",
            "name": "",
            "username": "Staff03",
            "password": "Staff@2503"
          }
        ];
  
        service.getUsers()
          .subscribe((users: User[]) => {
            expect(users.length).toBe(2);
          });
  
        let req = httpMock.expectOne('http://localhost:3000/users');
        expect(req.request.method).toBe("GET");
  
        req.flush(users);
        httpMock.verify();
      })));

});
