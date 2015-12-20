let expect = chai.expect;

describe('component navbar', () => {
  let element: angular.IAugmentedJQuery;

  beforeEach(angular.mock.module('expensio'));

  beforeEach(inject(($compile: angular.ICompileService, $rootScope: angular.IRootScopeService) => {

    element = angular.element(`
      <navbar></navbar>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
  }));

  it('should be compiled', () => {
    expect(element.html()).not.to.be.null;
  });

});
