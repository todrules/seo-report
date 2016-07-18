var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var neat = require('node-neat');
var plumber = require('gulp-plumber');
var kill   = require('child_process').exec;
var open = require('gulp-open');
var forever = require('forever-monitor');
var server;

var app = './www';

var src = {
	scss: 'scss/*.scss',
	css:  'css',
	html: 'templates/*.html',
	js:   'js/**/*.js',
	dist: './app/dist'
};

gulp.task('kill', function() {
	kill("ps aux | grep 'server/server.js' | awk '{print $2}' | xargs kill");
	console.log('success');
	return;
});



gulp.task('server', function (cb) {
	
	var looopback = new (forever.Monitor)('server/server.js', {
		max: 3,
		silent: false,
		args: []
	});
	looopback.on('exit', function () {
		console.log('server/server.js has exited after 3 restarts');
	});
	looopback.start();
	
	browserSync.init({
		files: [src.css, src.js],
		server: app,
		https: false,
		logLevel: "info",
		logConnections: true,
		logSnippet: true,
		open: 'local',
		notify: false,
		reloadDebounce: 2000,
		injectChanges: true
	});
	gulp.watch(src.scss, ['sass']);
	gulp.watch([src.html, './www/*.html', './www/css/*.css', './www/portal/**/*', './www/reports/**/*'], browserSync.reload);

});

gulp.task('serve', ['sass', 'server'], function(cb) {
			
});

gulp.task('html', browserSync.reload);

process.on('exit', function () {
	var success;
	var error;
	if(server !== null) {
		try {
			server.kill();
			success = true;
			return success;
		} catch(err) {
			error = err;
			return error;
		}
	} else {
		success = true;
		return success;
	}
});

gulp.task('shutdown', function() {
	process.once('SIGUSR2', function () {
		gracefulShutdown(function () {
			process.kill(process.pid, 'SIGUSR2');
		});
	});
});

gulp.task('sass', function() {
	
	return gulp.src('./../scss')
		.pipe(plumber())
		.pipe(sass({
			           includePaths: ['./www/scss'].concat(neat)
		           }))
		.on('error', sass.logError)
		.pipe(gulp.dest('./www/css'))
		.pipe(minifyCss({
			                keepSpecialComments: 0
		                }))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('./www/css'));
});

gulp.task('default', ['serve']);



