var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// var minify      = require('gulp-minify-css');
// var autoprefixer= require('gulp-autoprefixer');
// var uglify      = require('gulp-uglify');
// var concat      = require('gulp-concat');
// var jshint      = require('gulp-jshint');
// var plumber     = require('gulp-plumber');
// var sass        = require('gulp-sass');

// Static Server + watching
// result css/html files -> reload on change
gulp.task('serve', function() {
   browserSync.init({
      server: "./_site",
   });

   gulp.watch("_site/**/*.html").on('change', reload);
   gulp.watch("_site/**/*.css").on('change', reload);
});

 gulp.task('default', ['serve']);
