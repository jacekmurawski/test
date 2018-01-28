var gulp = require('gulp');
var sass = require('gulp-sass');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');

function observeSass() {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
	console.log("convert scss");
}

function observeTemplates() {
	gulp.src('templates/*.hbs')
		.pipe(handlebars())
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
		.pipe(declare({
			namespace: 'MyApp.templates',
			noRedeclare: true, // Avoid duplicate declarations
		}))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest('js/templates/'));
		console.log("convert templates");
}

gulp.task('styles', function(done){
	observeSass();
	done();
});

gulp.task('templates', function(done){
	observeTemplates();
	done();
});

observeSass();
observeTemplates();

gulp.task('default', function(){
	gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch('templates/*.hbs', ['templates']);
});