import { StoreService, Expense } from '../store/store.service';

interface IModalInstanceScope extends Expense, angular.IScope {};

export class ModalInstanceController {
  /** @ngInject */
  constructor (protected $scope: IModalInstanceScope, protected $modalInstance: angular.ui.bootstrap.IModalServiceInstance, protected store: StoreService) {}

  submit () {
    let data: Expense = {
      id: new Date().valueOf(),
      description: this.$scope.description,
      amount: Number(this.$scope.amount),
      category: this.$scope.category,
      paymentMode: this.$scope.paymentMode,
      account: this.$scope.account
    };

    this.store.save(data);
    this.$modalInstance.close();
  }

  cancel () {
    this.$modalInstance.dismiss('cancel');
  }
}
