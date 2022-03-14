import { Action } from '@ngrx/store';
import { ICoffee } from '../coffee';
export enum CoffeeActionTypes {
  LoadCoffees = '[Coffee] Load Coffee',
  LoadCoffeesSuccess = '[Coffee] Load Coffee Success',
  LoadCoffeesFailure = '[Coffee] Load Coffee Failure',
}

export class LoadCoffees implements Action {
  readonly type = CoffeeActionTypes.LoadCoffees;
}

export class LoadCoffeesSuccess implements Action {
  readonly type = CoffeeActionTypes.LoadCoffeesSuccess;
  constructor(public payload: { data: ICoffee[] }) { }
}

export class LoadCoffeesFailure implements Action {
  readonly type = CoffeeActionTypes.LoadCoffeesFailure;
  constructor(public payload: { error: string }) { }
}

export type CoffeeActions = LoadCoffees | LoadCoffeesSuccess | LoadCoffeesFailure;

