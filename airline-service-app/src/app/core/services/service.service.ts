import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../models/flight';
import { Passenger } from '../models/passenger';
import { User } from '../models/user';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  getFlightDetails(): Observable<Flight[]> {
    return this.http.get<Flight[]>('http://localhost:3000/flights')
      .pipe(
        tap(flights => { return flights }),
        catchError(this.handleError('getFlightDetails', []))
      );
  }

  getFlightDetailsById(number: string): Observable<Flight[]> {
    return this.http.get<Flight[]>('http://localhost:3000/flights')
      .pipe(map((x) => x.filter((u) => u.number === number)));
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  getPassengers(flight_id: string): Observable<Passenger[]> {
    return this.http.get<Passenger[]>('http://localhost:3000/passengers')
      .pipe(map((x) => x.filter((u) => u.flight_id === flight_id)));
  }

  getPassengerById(id: number): Observable<Passenger> {
    return this.http.get<Passenger>('http://localhost:3000/passengers/' + id)
      .pipe(
        tap(passenger => console.log('fetched passenger')),
        catchError(this.handleError<Passenger>(`getPassengerById id=${id}`))
      );
  }

  editPassenger(id: number, passenger: Passenger): Observable<Passenger> {
    return this.http.put<Passenger>('http://localhost:3000/passengers/' + id, passenger)
      .pipe(
        tap(_ => console.log(`updated passenger: id=${passenger.id}`)),
        catchError(this.handleError<Passenger>('editPassenger'))
      );
  }

  addPassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.post<Passenger>('http://localhost:3000/passengers', passenger)
      .pipe(
        tap(passenger => console.log('successfully added passenger')),
        catchError(this.handleError<Passenger>('addPassenger'))
      );
  }

  editFlight(id: number, flight: Flight): Observable<Flight> {
    return this.http.put<Flight>('http://localhost:3000/flights/' + id, flight)
      .pipe(
        tap(_ => console.log(`updated flight: id=${flight.id}`)),
        catchError(this.handleError<Flight>('editFlight'))
      );
  }

  getFlight(id: number): Observable<Flight> {
    return this.http.get<Flight>('http://localhost:3000/flights/' + id)
      .pipe(
        tap(flight => console.log('fetched flight')),
        catchError(this.handleError<Flight>(`getFlight id=${id}`))
      );
  }


  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
