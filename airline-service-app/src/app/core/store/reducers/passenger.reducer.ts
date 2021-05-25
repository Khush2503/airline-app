import { createReducer, on } from "@ngrx/store";
import { initialState } from "../states/passenger.state";

const _passengerReducer = createReducer(initialState);

export function PassengerReducer(state, action) {
    return _passengerReducer(state, action);
}