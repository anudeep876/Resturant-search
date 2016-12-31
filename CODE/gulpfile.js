var gulp = require('gulp');
       

gulp.task('hello', function(){

console.log('hello andy');

});

var useref = require('gulp-useref');
gulp.task('useref', function(){

return gulp.src('app/*.html')

.pipe(useref())
.pipe(gulp.dest('dist'))

});

var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});

var cssnano = require('gulp-cssnano');

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

var del = require('del');
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

var runSequence = require('run-sequence');

gulp.task('buildserve', function(callback) {
  runSequence('clean:dist', ['hello', 'useref'], callback);
});
var Server = require('karma').Server;
// gulp.task('test', ['scripts'], function(done) {
//   runTests(true, done);
// });

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
