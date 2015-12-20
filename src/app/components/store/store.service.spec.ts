import { StoreService, Expense } from './store.service';

let expect = chai.expect;

describe('Store Service', () => {

  beforeEach(angular.mock.module('expensio'));

  it('should be registered', inject((store: StoreService) => {
    expect(store).not.to.be.null;
  }));

  it('get expense should return array of object', inject((store: StoreService) => {
    expect(store.expenses.length >= 5).to.be.true;

    store.expenses.forEach((expense: Expense) => {
      expect(expense).not.to.be.null;
    });
  }));
});
