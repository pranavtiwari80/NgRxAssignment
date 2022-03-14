import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/coffee.reducer';

const getCoffeeFeatureState = createFeatureSelector<State>('coffeeItemsState');

export const getCoffees = createSelector(
  getCoffeeFeatureState,
  state => state.coffees
)

export const getError = createSelector(
  getCoffeeFeatureState,
  state => state.errors
)


export function getCoffeeItem(getCoffeeItem: any): import("rxjs").OperatorFunction<object, unknown> {
  throw new Error('Function not implemented.');
}
