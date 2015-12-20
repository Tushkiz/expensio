export class MainController {

  /** @ngInject */
  constructor ($timeout: angular.ITimeoutService, protected toastr: any) {
    $timeout(() => {
      this.showToastr();
    }, 2000);
  }
  showToastr() {
    this.toastr.info('Hola from Expensio!');
  }
}
