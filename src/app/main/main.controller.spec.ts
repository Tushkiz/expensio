import { MainController } from './main.controller';
import { StoreService } from '../components/store/store.service';

describe('controllers', () => {
  let mainController: MainController;

  beforeEach(angular.mock.module('expensio'));

  beforeEach(inject(($controller: angular.IControllerService, store: StoreService, toastr: any) => {
    store.data = [null, null, null, null, null];
    spyOn(toastr, 'info').and.callThrough();

    mainController = $controller('MainController');
  }));

  it('should show a welcome Toastr info', inject((toastr: any) => {
    mainController.showToastr();
    expect(toastr.info).toHaveBeenCalled();
  }));
});
