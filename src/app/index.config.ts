/** @ngInject */
export function config($logProvider: angular.ILogProvider, toastrConfig: any) {
  // enable log
  $logProvider.debugEnabled(true);
  // set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  Array.prototype.groupBy = function (key) {
    var result = {};
    this.forEach(function (item) {
      result[item[key]] = result[item[key]] || [];
      result[item[key]].push(item)
    });
    return result;
  }
}
