export class Expense {
	id: number;
	description: string;
	amount: number;
	category: string;
    paymentMode: string;
    incomeSource: string;
}

export class StoreService {
	public data: Expense[];

	public get expenses(): Expense[] {
		return this.data;
	}

	public save (expense: Expense) {
		this.data.push(expense);
		localStorage.setItem('ls.expenses', JSON.stringify(this.data));
	}

	/** @ngInject */
	constructor() {
		let rawData = [
			{
				'id': 1450217381460,
				'description': 'Lunch',
				'amount': 100,
				'category': 'food',
                'incomeSource': 'salary',
                'paymentMode': 'debit-card'
			},
			{
				'id': 1450217381810,
				'description': 'Jeans',
				'amount': 799,
				'category': 'shopping',
                'incomeSource': 'business',
                'paymentMode': 'credit-card'
			},
			{
				'id': 1450317382160,
				'description': 'Rent',
				'amount': 4150,
				'category': 'rent',
                'incomeSource': 'farming',
                'paymentMode': 'cash'
			},
			{
				'id': 1450317382510,
				'description': 'Dinner',
				'amount': 80,
				'category': 'food',
                'incomeSource': 'salary',
                'paymentMode': 'cash'
			},
			{
				'id': 1450417382860,
				'description': 'Petrol',
				'amount': 500,
				'category': 'fuel',
                'incomeSource': 'salary',
                'paymentMode': 'cash'
			}
		];

		if (localStorage.getItem('ls.expenses') == null) {
			localStorage.setItem('ls.expenses', JSON.stringify(rawData));
		}

		this.data = JSON.parse(localStorage.getItem('ls.expenses'));

	}
}
