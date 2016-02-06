var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');

gulp.task('scripts', function() {
    browserify('./js/app.js', { debug: true })
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('app.min.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('styles', function() {
    gulp.src('./css/styles.css')
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('./js/**/*.js', ['scripts']);
    gulp.watch('./css/**/*.css', ['scripts']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
