var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

var DEST = 'dist/';

gulp.task('build-js', function() {
  return gulp.src('./public/**/*.js')
    .pipe(plugins.concat('/js/main.js'))
    .pipe(gulp.dest(DEST))
    .pipe(plugins.uglify())
    .pipe(plugins.rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST));
});

gulp.task('build-css', function() {
  return gulp.src('./public/**/*.css')
    .pipe(plugins.concat('/css/main.css'))
    .pipe(gulp.dest(DEST))
    .pipe(plugins.cssnano())
    .pipe(plugins.rename({ extname: '.min.css' }))
    .pipe(gulp.dest(DEST));
});

gulp.task('build-html', function() {
  return gulp.src('./public/**/*.html')
    .pipe(gulp.dest(DEST));
});

gulp.task('serve', function() {
  plugins.nodemon({
    script: 'server.js',
    ignore: ['./public', './dist']
  });
});

gulp.task('watch', function() {
  gulp.watch('./public/**/*.js', ['build-js']);
  gulp.watch('./public/**/*.css', ['build-css']);
  gulp.watch('./public/**/*.html', ['build-html']);
});

gulp.task('build', ['build-js', 'build-css', 'build-html']);

gulp.task('default', ['watch', 'build', 'serve']);
