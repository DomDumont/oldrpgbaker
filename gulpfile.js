// Requis
var gulp = require('gulp');
var path = require('path');

// Include plugins
var plugins = require('gulp-load-plugins')();



// Variables de chemins
var source = '.'; // dossier de travail
var destination = './dist'; // dossier à livrer








// watch for any TypeScript or LESS file changes
// if a file change is detected, run the TypeScript or LESS compile gulp tasks
gulp.task('watch', function () 
    {
    gulp.watch(source + '/src/**/*.ts', ['build']);
    gulp.watch(source + '/src/server/public/**/*', ['copypublic']);
    gulp.watch(source + '/src/server/views/**/*', ['copyviews']);
    }); 


// TypeScript build for /src folder 

var tsProject = plugins.typescript.createProject('tsconfig.json');

gulp.task('build', function () {
    return gulp.src(source +'/src/**/*.ts')
        .pipe(tsProject()) 
        .pipe(gulp.dest(destination));
});




gulp.task('copypublic', function () {
 return gulp.src(source + '/src/server/public/**/*')
    .pipe(gulp.dest(destination + '/server/public/'));
 });


gulp.task('copyviews', function () {
 return gulp.src(source + '/src/server/views/**/*')
    .pipe(gulp.dest(destination + '/server/views/'));
 });



gulp.task('default', ['build']);