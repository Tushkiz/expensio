/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { ModalInstanceController } from './components/expenseForm/modalInstance.controller';
import { ExpenseFormController } from './components/expenseForm/expenseForm.controller';
import { StoreService } from '../app/components/store/store.service';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';

module expensio {
  'use strict';

  angular.module('expensio', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'toastr'])
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('store', StoreService)
    .controller('MainController', MainController)
    .controller('ModalInstanceController', ModalInstanceController)
    .controller('ExpenseFormController', ExpenseFormController)
    .directive('acmeNavbar', acmeNavbar);
}
