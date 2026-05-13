var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('react', function(){
  return gulp.src('./jsx/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('./js/'));
});

gulp.task('react-example', function(){
  return gulp.src('./example/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('./example/'));
});

