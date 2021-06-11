import { createReducer, on } from '@ngrx/store';
import { initialState } from '../states/flight.state';

const _flightReducer = createReducer(initialState);

export function FlightReducer(state, action) {
    return _flightReducer(state, action);
}
