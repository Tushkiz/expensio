import { StoreService, Expense } from '../store/store.service';

export class ExpenseListController {
    public expenses: Expense[];

  /** @ngInject */
  constructor (protected store: StoreService) {
    this.expenses = store.expenses;
  }

}
