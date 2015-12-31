import data from './data';

export interface IExpensioScope extends angular.IScope {
  expenses: Expense[];
  accounts: Account[];
}

export class Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
  paymentMode: string;
  account: string;
}

export class Account {
  name: string;
  balance: number;
}

export class StoreService {
  public expenseData: Expense[];
  public accountData: Account[];

  public get expenses(): Expense[] {
    return this.expenseData;
  }

  public get accounts(): Account[] {
    return this.accountData;
  }

  public save(expense: Expense) {
    let result = this.updateAccounts(expense);

    if (!result) {
      this.toastr.error('Insufficient balance in "' + expense.account + '" account.');
    } else {
      this.expenseData.push(expense);
      localStorage.setItem('ls.expenses', JSON.stringify(this.expenseData));
    }
  }

  /** @ngInject */
  constructor(protected toastr: any) {
    if (localStorage.getItem('ls.expenses') == null) {
      localStorage.setItem('ls.expenses', JSON.stringify(data.expenses));
    }

    if (localStorage.getItem('ls.accounts') == null) {
      localStorage.setItem('ls.accounts', JSON.stringify(data.accounts));
    }

    this.expenseData = JSON.parse(localStorage.getItem('ls.expenses'));
    this.accountData = JSON.parse(localStorage.getItem('ls.accounts'));

  }

  private updateAccounts(expense: Expense) {
    let accountToUpdate = this.accountData.filter((account: Account) => {
      return account.name === expense.account;
    })[0];

    if (expense.amount > accountToUpdate.balance) {
      return false;
    }

    accountToUpdate.balance = accountToUpdate.balance - expense.amount;
    localStorage.setItem('ls.accounts', JSON.stringify(this.accountData));

    return true;
  }
}
