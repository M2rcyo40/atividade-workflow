var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

//tarefas que vão compilar e minificar os arquivos da pasta scss e enviar para a pasta (css) que ficará dentro da pasta dist

gulp.task('minifica-css', function(){
    return gulp.src('./source/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css'));
});

//tarefa responsável por minificar o html da pasta source e enviar para dist

gulp.task('minifica-html', function() {
  	return gulp.src('./source/*.html')
    	.pipe(htmlmin({collapseWhitespace: true}))
    	.pipe(gulp.dest('./dist'));
});

//watch para monitorar alterações e ações na pasta source

gulp.task('escuta', function() {
    gulp.watch('source/scss/*.scss', ['minifica-css']);
    gulp.watch('source/index.html', ['minifica-html']);
});




