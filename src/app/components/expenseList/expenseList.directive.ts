/** @ngInject */
export function expenseList(): angular.IDirective {

  return {
    restrict: 'E',
    templateUrl: 'app/components/expenseList/expenseList.html',
    controller: 'ExpenseListController',
    controllerAs: 'vm',
    scope: true
  };

}
