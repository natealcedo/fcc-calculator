var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var concatCss = require('gulp-concat-css');


gulp.task('default',['moveJs', 'concat-css', 'moveHTML'], function () {
	browserSync.init({
		server: './dist'
	});
	gulp.watch('./src/**/*', ['moveJs', 'concat-css', 'moveHTML', reload]);
});

gulp.task('concat-css', ()=> {
	return gulp.src('./src/**/*.css')
	.pipe(concatCss('main.css'))
	.pipe(gulp.dest('./dist/css/'));
});

gulp.task('moveHTML', ()=>{
	gulp.src('./src/*.html')
	.pipe(gulp.dest('./dist'));
});

gulp.task('moveJs', ()=>{
	gulp.src('./src/**/*.js')
	.pipe(gulp.dest('./dist/'));
});
