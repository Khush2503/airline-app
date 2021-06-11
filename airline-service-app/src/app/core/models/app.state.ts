import { FlightReducer } from '../store/reducers/flight.reducer';
import { PassengerReducer } from '../store/reducers/passenger.reducer';
import { FLIGHT_STATE_NAME } from '../store/selectors/flight.selector';
import { PASSENGER_STATE_NAME } from '../store/selectors/passenger.selector';
import { FlightState } from '../store/states/flight.state';
import { PassengerState } from '../store/states/passenger.state';

export interface AppState {
    [PASSENGER_STATE_NAME]: PassengerState;
    [FLIGHT_STATE_NAME]: FlightState;
}

export const appReducer = {
    [PASSENGER_STATE_NAME]: PassengerReducer,
    [FLIGHT_STATE_NAME]: FlightReducer
};
