var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	uglifyCss = require('gulp-uglifycss'),
	concat = require('gulp-concat'),
	imagemin = require('gulp-imagemin');

//Gulp task to minify and concatenate all JavaScript files in root/js/
gulp.task('concat-min-js', function() {
	return gulp.src('js/*.js')
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build'));
});

//Gulp task to minify and concatenate all CSS files in root/css/
gulp.task('concat-min-css', function() {
	return gulp.src('css/*.css')
		.pipe(concat('all.min.css'))
		.pipe(uglifyCss())
		.pipe(gulp.dest('build'));
});

//Gulp task to minify images by removing redundancy.
gulp.task('image', function() {
	return gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('build/img'));
});


gulp.task('concat-min', ['concat-min-js', 'concat-min-css']);
