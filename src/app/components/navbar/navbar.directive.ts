/** @ngInject */
export function acmeNavbar(): angular.IDirective {

  return {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: true
  };

}
