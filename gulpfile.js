var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');

gulp.task('default', function () {

});

gulp.task('material-theme-less', function () {
	return gulp.src('./test/material-ui/*.less')
		.pipe(less({
		paths: [path.join(__dirname, 'less', 'includes')]
	}))
		.pipe(gulp.dest('./test/material-ui/'));
});	

// Basic usage 
gulp.task('scripts', function() {
     return browserify('./test/browserify/source/app.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('app.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./test/browserify/'));
});


 
gulp.task('react', function () {
    var bundler = browserify({
        entries: ['./test/react/app.jsx'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: false, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    }).bundle() // Create the initial bundle when starting the task
      .pipe(source('app.js'))
      .pipe(gulp.dest('./test/react/'));
});	

gulp.task('app', function () {
    return browserify('./app/client.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('client.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./public/'));   
});

gulp.task('default', []);

