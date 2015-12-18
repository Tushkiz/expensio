import { StoreService, Expense } from '../components/store/store.service';

export class MainController {
    public expenses: Expense[];

  /** @ngInject */
  constructor ($timeout: angular.ITimeoutService, protected store: StoreService) {
    this.expenses = store.expenses;
  }

}
