import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { ServiceService } from '../../services/service.service';
import { editPassenger, editPassengerSuccess, passenger, passengerSuccess } from '../actions/passenger.action';

@Injectable()
export class PassengerEffects {
    constructor(private actions$: Actions, private service: ServiceService) { }

    passenger$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(passenger),
            exhaustMap((action) => {
                return this.service.addPassenger(action).pipe(
                    map((data) => {
                        return passengerSuccess();
                    })
                );
            })
        );
    });

    editPassenger$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(editPassenger),
            exhaustMap((action) => {
                return this.service.editPassenger(action.id, action).pipe(
                    map((data) => {
                        return editPassengerSuccess();
                    })
                );
            })
        );
    });
}
