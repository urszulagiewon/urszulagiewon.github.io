    'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function(){
return gulp.src('dafne/scss/**/*.scss')
.pipe(sass())
.pipe(gulp.dest('dafne/css'));
});
gulp.task('watch', function(){
gulp.watch('dafne/scss/**/*.scss', ['sass']);
});