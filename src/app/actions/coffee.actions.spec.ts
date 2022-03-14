import * as CoffeeActions from './coffee.actions';

describe('Coffee', () => {
  it('should create an instance', () => {
    expect(new CoffeeActions.LoadCoffees()).toBeTruthy();
  });
});
