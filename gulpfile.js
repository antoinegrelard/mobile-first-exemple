var gulp = require("gulp");
var browsersync = require('browser-sync');
var sass = require("gulp-sass");
var minify = require('gulp-minify-css');
var plumber = require("gulp-plumber");
var reload = browsersync.reload;

gulp.task('default', ['watch']);

gulp.task('sass', function() {
	return gulp.src('./css/styles.scss')
		.pipe(plumber(function (err) {
            console.log(err);
            this.emit('end');
	     }))
		.pipe(sass())
		.pipe(minify())
		.pipe(gulp.dest('./css/'))
		.pipe(reload({stream: true}));
});

gulp.task('html', function() {
	return gulp.src('index.html')
		.pipe(reload({stream: true}));
})

gulp.task('watch', ['browsersync'], function() {
	gulp.watch('./css/styles.scss', ['sass']);
	gulp.watch('index.html', ['html']);
});

gulp.task('browsersync', function() {
	browsersync({
        server: {
            baseDir: "./"
        }
    });
});