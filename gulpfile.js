var gulp = require('gulp');
var gutil = require('gulp-util');
var minifyCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var fs = require('fs');
var path = require('path');

var webpack = require('webpack');

var webpackConfigProduct = require('./webpack.production.config.js');
var webpackConfigDevelop = require('./webpack.development.config.js');

gulp.task('webpack', function(callback) {
  webpack(webpackConfigProduct, function(err) { // stats
    if (err) throw new gutil.PluginError('webpack', err);
    callback();
  });
});

gulp.task('webpackDevelop', function(callback) {
  webpack(webpackConfigDevelop, function(err) { // stats
    if (err) throw new gutil.PluginError('webpack', err);
    callback();
  });
});

gulp.task('minifyJs', ['webpack'], function() {
  return gulp.src('./product/**/*.js')
      .pipe(uglify({
        output: {
          max_line_len: 100
        }
      }))
      .pipe(gulp.dest('./product'));
});

gulp.task('minifycssPro', ['webpack'], function() {
  return gulp.src('./product/**/*.css')
      .pipe(minifyCss())
      .pipe(gulp.dest('./product'));
});

gulp.task('minifycssDev', ['webpackDevelop'], function() {
  return gulp.src('./development/**/*.css')
      .pipe(minifyCss())
      .pipe(gulp.dest('./development'));
});

gulp.task('product', ['minifycssPro', 'minifyJs']);

gulp.task('default', ['minifycssDev']);
