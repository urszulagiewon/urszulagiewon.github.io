var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function(){
    'use strict';
return gulp.src('cv/scss/**/*.scss')
.pipe(sass())
.pipe(gulp.dest('cv/css'));
});
gulp.task('watch', function(){
gulp.watch('cv/scss/**/*.scss', ['sass']);
});