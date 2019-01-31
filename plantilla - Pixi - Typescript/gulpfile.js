var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");


gulp.task("copy-libs", function () {
	return gulp.src(['libs/*.js'])
		.pipe(gulp.dest("js/libs"));
});


var watchedBrowserify = watchify(browserify({
	basedir: '.',
	debug: true,
	entries: ['src/main.ts'],
	cache: {},
	packageCache: {}
}).plugin(tsify, {noImplicitAny: true}));

function bundle() {
	return watchedBrowserify
		.bundle()
		.pipe(source('gameBundle.js'))
		.pipe(gulp.dest("js"));
}

gulp.task("default", gulp.series("copy-libs", bundle));
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);