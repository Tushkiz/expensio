/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';

module expensio {
  'use strict';

  angular.module('expensio', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'toastr'])
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('webDevTec', WebDevTecService)
    .controller('MainController', MainController)
    .directive('acmeNavbar', acmeNavbar);
}
