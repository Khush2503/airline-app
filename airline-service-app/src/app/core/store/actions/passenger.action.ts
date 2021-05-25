import { createAction, props } from "@ngrx/store";
import { Passenger } from "../../models/passenger";

export const PASSENGER = '[passenger page] passenger';
export const PASSENGER_SUCCESS = '[passenger page] passenger success';

export const passenger = createAction(PASSENGER, props<Passenger>());
export const passengerSuccess = createAction(PASSENGER_SUCCESS);

export const UPDATE_PASSENGER = '[passenger page] update_passenger';
export const UPDATE_PASSENGER_SUCCESS = '[passenger page] update_passenger success';

export const editPassenger = createAction(PASSENGER, props<Passenger>());
export const editPassengerSuccess = createAction(UPDATE_PASSENGER_SUCCESS);