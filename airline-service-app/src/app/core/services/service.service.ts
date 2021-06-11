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

  /**
   * Gets flight details
   * @returns flight details 
   */
  getFlightDetails(): Observable<Flight[]> {
    return this.http.get<Flight[]>('/api/flights')
      .pipe(
        tap(flights => flights),
        catchError(this.handleError('getFlightDetails', []))
      );
  }

  /**
   * Gets flight details by id
   * @param flightNumber 
   * @returns flight details by id 
   */
  getFlightDetailsById(flightNumber: string): Observable<Flight[]> {
    return this.http.get<Flight[]>('/api/flights')
      .pipe(map((x) => x.filter((u) => u.number === flightNumber)));
  }

  /**
   * Gets users
   * @returns users 
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  /**
   * Gets passengers
   * @param flightId 
   * @returns passengers 
   */
  getPassengers(flightId: string): Observable<Passenger[]> {
    return this.http.get<Passenger[]>('/api/passengers')
      .pipe(map((x) => x.filter((u) => u.flightId === flightId)));
  }

  /**
   * Gets passenger by id
   * @param id 
   * @returns passenger by id 
   */
  getPassengerById(id: number): Observable<Passenger> {
    return this.http.get<Passenger>('/api/passengers/' + id)
      .pipe(
        tap(_ => console.log('fetched passenger')),
        catchError(this.handleError<Passenger>(`getPassengerById id=${id}`))
      );
  }

  /**
   * Edits passenger
   * @param id 
   * @param passenger 
   * @returns passenger 
   */
  editPassenger(id: number, passenger: Passenger): Observable<Passenger> {
    return this.http.put<Passenger>('/api/passengers/' + id, passenger)
      .pipe(
        tap(_ => console.log(`updated passenger: id=${passenger.id}`)),
        catchError(this.handleError<Passenger>('editPassenger'))
      );
  }

  /**
   * Adds passenger
   * @param passenger 
   * @returns passenger 
   */
  addPassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.post<Passenger>('/api/passengers', passenger)
      .pipe(
        tap(_ => console.log('successfully added passenger')),
        catchError(this.handleError<Passenger>('addPassenger'))
      );
  }

  /**
   * Edits flight
   * @param id 
   * @param flight 
   * @returns flight 
   */
  editFlight(id: number, flight: Flight): Observable<Flight> {
    return this.http.put<Flight>('/api/flights/' + id, flight)
      .pipe(
        tap(_ => console.log(`updated flight: id=${flight.id}`)),
        catchError(this.handleError<Flight>('editFlight'))
      );
  }

  /**
   * Gets flight
   * @param id 
   * @returns flight 
   */
  getFlight(id: number): Observable<Flight> {
    return this.http.get<Flight>('/api/flights/' + id)
      .pipe(
        tap(_ => console.log('fetched flight')),
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
