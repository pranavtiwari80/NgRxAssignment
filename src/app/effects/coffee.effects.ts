import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as coffeeActions from '../actions/coffee.actions';
import { CoffeeService } from '../coffee.service';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class CoffeeEffects {

  constructor(private actions$: Actions, private coffeeService: CoffeeService) { }

  @Effect()
  loadCfeeList$: Observable<Action> = this.actions$.pipe(
    ofType(coffeeActions.CoffeeActionTypes.LoadCoffees),
    mergeMap(
      action => this.coffeeService.getCoffeeList().pipe(
        map(clist => (new coffeeActions.LoadCoffeesSuccess({ data: clist }))))
      )
    )


}
