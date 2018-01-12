var gulp = require('gulp');
var sass = require('gulp-sass')

function observeSass() {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
	console.log("convert scss");
}

gulp.task('styles', function(done){
	observeSass();
	done();
});

observeSass();

gulp.task('default', function(){
	gulp.watch('sass/**/*.scss', ['styles']);
});
