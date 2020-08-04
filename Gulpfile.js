'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat');
var auto = require('gulp-autoprefixer');
var clean = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
gulp.task('minify', function() {
    return gulp.src('./css/styles.css')
        .pipe(cleanCSS())
        .pipe(rename('dist.min.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('del', function() {
    gulp.src('./css/styles.css')
        .pipe(clean({ force: true }))
        .pipe(gulp.dest('dist'));
})
gulp.task('css', async function() {
    gulp.src('./css/*.css')
        .pipe(concatCss('styles.css'))
        .pipe(gulp.dest('./css/'));
});
gulp.task('autopref', function(done) {
    gulp.src('./css/*css')
        .pipe(auto({
            cascade: false
        }))
        .pipe(gulp.dest('./css'));
    done();
})
gulp.task('anus', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(clean())
        .pipe(auto())
        .pipe(concatCss('styles.css'))
        .pipe(gulp.dest('./css'));




    gulp.watch('./sass/*.scss', gulp.series('anus'));

});

gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', gulp.series('anus'));


});