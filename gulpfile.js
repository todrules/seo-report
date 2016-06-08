var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var neat = require('node-neat');
var plumber = require('gulp-plumber');

var app = './www';

var src = {
	scss: 'scss/*.scss',
	css:  'css',
	html: 'templates/*.html',
	js:   'js/**/*.js',
	dist: './app/dist'
};

gulp.task('js', function () {
	return gulp.src(src.js)
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest(src.dist + '/js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest(src.dist + '/js'));
});

gulp.task('serve', ['sass'], function() {

	browserSync.init([src.css, src.js], {
		                 server: app
	                 });

	gulp.watch(src.scss, ['sass']);
	gulp.watch([src.html, './www/*.html', './www/css/*.css', './www/portal/**/*', './www/reports/**/*'], browserSync.reload);

});

gulp.task('html', browserSync.reload);

gulp.task('sass', function() {
	return gulp.src(src.scss)
		.pipe(plumber())
		.pipe(sass({
			           includePaths: ['./www/scss'].concat(neat)
		           }))
		.on('error', sass.logError)
		.pipe(gulp.dest(src.css))
		.pipe(minifyCss({
			                keepSpecialComments: 0
		                }))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest(src.css))
		.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);



