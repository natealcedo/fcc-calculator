var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var uglifyCss = require('gulp-uglifycss');

gulp.task('default',['moveJs', 'concat-css', 'moveHTML'], function () {
	browserSync.init({
		server: './dist'
	});
	gulp.watch('./src/**/*', ['moveJs', 'concat-css', 'moveHTML', reload]);
});

gulp.task('concat-css', ()=> {
	return gulp.src('./src/**/*.css')
	.pipe(concatCss('main.min.css'))
	.pipe(uglifyCss({
		'maxLineLen': 80,
		'uglyComments': true
	}))
	.pipe(gulp.dest('./dist/css/'));
});

gulp.task('moveHTML', ()=>{
	gulp.src('./src/*.html')
	.pipe(gulp.dest('./dist'));
});

gulp.task('moveJs', ()=>{
	gulp.src('./src/**/*.js')
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(uglify())
	.pipe(concat('main.min.js'))
	.pipe(gulp.dest('./dist/js'));
});
