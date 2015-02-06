var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
  gulp.src(['./bower_components/mobile-detect/mobile-detect.js', './src/*.js'])
    .pipe(concat('angular-mobile-detect.js'))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('default', ['scripts']);