import { StoreService, Expense } from './store.service';

describe('Store Service', () => {

  beforeEach(angular.mock.module('expensio'));

  it('should be registered', inject((store: StoreService) => {
    expect(store).not.toEqual(null);
  }));

  it('get expense should return array of object', inject((store: StoreService) => {
    expect(store.expenses.length >= 5).toBeTruthy();

    store.expenses.forEach((expense: Expense) => {
      expect(expense).not.toBeNull();
    });
  }));
});
