/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var wrench = require('wrench');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

/**
 *  Lists all the available tasks
 */
gulp.task('list', function () {
  console.log([
    [gulpUtil.colors.blue("`$ gulp`"), "to build an optimized version of your application in folder dist"].join(" "),
    [gulpUtil.colors.blue("`$ gulp serve`"), "to start BrowserSync server on your source files with live reload"].join(" "),
    [gulpUtil.colors.blue("`$ gulp serve:dist`"), "to start BrowserSync server on your optimized application without live reload"].join(" "),
    [gulpUtil.colors.blue("`$ gulp test`"), "to run your unit tests with Karma"].join(" "),
    [gulpUtil.colors.blue("`$ gulp test:auto`"), "to run your unit tests with Karma in watch mode"].join(" "),
    [gulpUtil.colors.blue("`$ gulp protractor`"), "to launch your e2e tests with Protractor"].join(" "),
    [gulpUtil.colors.blue("`$ gulp protractor:dist`"), "to launch your e2e tests with Protractor on the dist files"].join(" "),
    [gulpUtil.colors.blue("`$ gulp list`"), "to list all these tasks"].join(" ")
  ].join('\n'));
});