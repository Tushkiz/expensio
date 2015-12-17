import { WebDevTecService, ITecThing } from '../components/webDevTec/webDevTec.service';

export class MainController {
  public awesomeThings: ITecThing[];
  public webDevTec: WebDevTecService;
  public classAnimation: string;
  public creationDate: number;
  public toastr: any;

  /* @ngInject */
  constructor ($timeout: angular.ITimeoutService, webDevTec: WebDevTecService, toastr: any) {
    this.awesomeThings = new Array();
    this.webDevTec = webDevTec;
    this.classAnimation = '';
    this.creationDate = 1450335106166;
    this.toastr = toastr;
    this.activate($timeout);
  }

  /** @ngInject */
  activate($timeout: angular.ITimeoutService) {
    this.getWebDevTec();

    var self = this;

    $timeout(function() {
      self.classAnimation = 'rubberBand';
    }, 4000);
  }

  showToastr() {
    this.toastr.info('');
    this.classAnimation = '';
  }

  getWebDevTec() {
    this.awesomeThings = this.webDevTec.tec;
  }
}
