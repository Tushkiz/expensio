'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var ghPages = require('gulp-gh-pages');
var del = require('del');

gulp.task('publish', function() {
  return gulp.src(path.join(conf.paths.dist, '/**/*'))
    .pipe(ghPages());
});

gulp.task('cleanPub', ['publish'], function () {
  return del(['.publish']);
});

gulp.task('deploy', ['publish', 'cleanPub']);