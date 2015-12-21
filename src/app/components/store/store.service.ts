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

  public save(expense: Expense) {
    this.expenseData.push(expense);
    this.updateAccounts(expense);
    localStorage.setItem('ls.expenses', JSON.stringify(this.expenseData));
  }

  /** @ngInject */
  constructor() {
    let rawExpenseData = [
      { 'id': 1450217381460, 'description': 'Lunch', 'amount': 100, 'category': 'food', 'account': 'salary', 'paymentMode': 'debit-card' },
      { 'id': 1450217381810, 'description': 'Jeans', 'amount': 799, 'category': 'shopping', 'account': 'business', 'paymentMode': 'credit-card' },
      { 'id': 1450317382160, 'description': 'Rent', 'amount': 4150, 'category': 'rent', 'account': 'farming', 'paymentMode': 'cash' },
      { 'id': 1450317382510, 'description': 'Dinner', 'amount': 80, 'category': 'food', 'account': 'salary', 'paymentMode': 'cash' },
      { 'id': 1450417382860, 'description': 'Petrol', 'amount': 500, 'category': 'fuel', 'account': 'salary', 'paymentMode': 'cash' },
      { 'id': 1450517382860, 'description': 'Groceries', 'amount': 1000, 'category': 'shopping', 'account': 'salary', 'paymentMode': 'credit-card' },
      { 'id': 1450691335302, 'description': 'team lunch', 'amount': 2000, 'category': 'food', 'paymentMode': 'debit-card', 'account': 'business' }
    ];

    let rawAccountData = [
      { 'name': 'salary', 'balance': 98320 },
      { 'name': 'business', 'balance': 97201 },
      { 'name': 'farming', 'balance': 95850 }
    ];

    if (localStorage.getItem('ls.expenses') == null) {
      localStorage.setItem('ls.expenses', JSON.stringify(rawExpenseData));
    }

    if (localStorage.getItem('ls.accounts') == null) {
      localStorage.setItem('ls.accounts', JSON.stringify(rawAccountData));
    }

    this.expenseData = JSON.parse(localStorage.getItem('ls.expenses'));
    this.accountData = JSON.parse(localStorage.getItem('ls.accounts'));

  }

  private updateAccounts(expense: Expense) {
    let accountToUpdate = this.accountData.filter((account: Account) => {
      return account.name === expense.account;
    })[0];

    accountToUpdate.balance = accountToUpdate.balance - expense.amount;
  }
}
