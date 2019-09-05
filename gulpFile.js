'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./public/sass/*.sass') //палка и звездочка перед крайним scss
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./public/sass/*.sass', ['sass']);//тоже самое
});
/*
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('./public/sass/*.sass')
          .pipe(sass())
          .pipe(gulp.dest('./public/css'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./public/sass/*.sass', ['sass']);//тоже самое
});
*/
