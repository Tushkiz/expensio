export class ExpenseFormController {
	public modalInstance: any;

	/** @ngInject */
	constructor (protected $modal: angular.ui.bootstrap.IModalService) {}

	open () {
		this.modalInstance = this.$modal.open({
			animation: true,
			templateUrl: 'app/components/expenseForm/expenseForm.html',
			controller: 'ModalInstanceController',
			controllerAs: 'modal',
			bindToController: true
		});
	}
}
