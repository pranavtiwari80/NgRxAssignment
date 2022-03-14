import { Action } from '@ngrx/store';
import { ICoffee } from '../coffee';
import { CoffeeActions, CoffeeActionTypes } from '../actions/coffee.actions';



export const coffeeFeatureKey = 'coffeeItemsState';

export interface State {
  coffees: ICoffee[],
  errors: string
}

export const initialState: State = {
  coffees:[],
  errors:''
};

export function reducer(state = initialState, action: CoffeeActions): State {
  //console.log("Action Type: "+ action.type);
  switch (action.type) {

  	case CoffeeActionTypes.LoadCoffees:

      return {
        ...state
      }

    case CoffeeActionTypes.LoadCoffeesSuccess:

      return {
        ...state,
        coffees: action.payload.data,
        errors: ''
      }

    case CoffeeActionTypes.LoadCoffeesFailure:
      return {
        ...state,
        coffees: [],
        errors: action.payload.error
      }
    default:
      return state;
  }
}
