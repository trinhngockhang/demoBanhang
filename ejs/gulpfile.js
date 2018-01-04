const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const stripDebug = require('gulp-strip-debug');

gulp.task('scripts', function() {
    gulp.src('public/js/*.js')
        .pipe(concat('script.js'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('public/minify'))
});
