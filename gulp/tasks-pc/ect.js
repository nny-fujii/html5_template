/*------------------------------------------------------------------------------------------------

    ect

------------------------------------------------------------------------------------------------*/
var gulp     = require('gulp');
var ect      = require('gulp-ect');
var prettify = require('gulp-prettify');
var config   = require('../config-pc').ect;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('ect:pc', function(){
    gulp.src(config.src)
        .pipe(ect())
        .pipe(prettify({
            indent_size  : 4,
            extra_liners : ''
        }))
        .pipe(gulp.dest(config.dest))
    ;
});