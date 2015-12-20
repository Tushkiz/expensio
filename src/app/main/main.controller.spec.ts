import { MainController } from './main.controller';
import { StoreService } from '../components/store/store.service';

let expect = chai.expect;

describe('controllers', () => {
  let mainController: MainController;

  beforeEach(angular.mock.module('expensio'));

  beforeEach(inject(($controller: angular.IControllerService, store: StoreService, toastr: any) => {
    store.data = [null, null, null, null, null];
    sinon.spy(toastr, 'info');

    mainController = $controller('MainController');
  }));

  it('should show a welcome Toastr info', inject((toastr: any) => {
    mainController.showToastr();
    expect(toastr.info).to.have.been.calledOnce;
  }));
});
