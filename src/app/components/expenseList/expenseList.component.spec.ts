import { ExpenseListController } from './expenseList.controller';
let expect = chai.expect;
describe('component expenseList', () => {
  let element: angular.IAugmentedJQuery;
  let expenseListController: ExpenseListController;

  beforeEach(angular.mock.module('expensio'));

  beforeEach(inject(($compile: angular.ICompileService, $rootScope: angular.IRootScopeService) => {

    element = angular.element(`
      <expense-list></expense-list>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();

    expenseListController = (<any> element.scope()).vm;
  }));

  it('should be compiled', () => {
    expect(element.html()).not.to.be.null;
  });

  it('should have isolate scope object with instanciate members', () => {
    expect(expenseListController).not.to.be.null;
    expect(expenseListController.expenses).not.to.be.null;
  });
});
