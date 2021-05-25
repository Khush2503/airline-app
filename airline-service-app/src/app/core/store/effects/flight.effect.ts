import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs/operators";
import { ServiceService } from "../../services/service.service";
import { editFlight, editFlightSuccess, flight, flightSuccess } from "../actions/flight.action";

@Injectable()
export class FlightEffects {
    constructor(private actions$: Actions, private service: ServiceService) { }

    flight$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(flight),
            exhaustMap((action) => {
                return this.service.editFlight(action.id, action).pipe(
                    map((data) => {
                        return flightSuccess();
                    })
                );
            })
        );
    });

    editFlight$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(editFlight),
            exhaustMap((action) => {
                return this.service.editFlight(action.id, action).pipe(
                    map((data) => {
                        return editFlightSuccess();
                    })
                );
            })
        );
    });
}