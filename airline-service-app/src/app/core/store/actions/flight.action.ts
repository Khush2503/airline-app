import { createAction, props } from "@ngrx/store";
import { Flight } from "../../models/flight";

export const FLIGHT = '[flight page] flight';
export const FLIGHT_SUCCESS = '[flight page] flight success';

export const flight = createAction(FLIGHT, props<Flight>());
export const flightSuccess = createAction(FLIGHT_SUCCESS);

export const UPDATE_FLIGHT = '[flight page] update_flight';
export const UPDATE_FLIGHT_SUCCESS = '[flight page] update_flight success';

export const editFlight = createAction(FLIGHT, props<Flight>());
export const editFlightSuccess = createAction(UPDATE_FLIGHT_SUCCESS);