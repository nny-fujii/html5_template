/*------------------------------------------------------------------------------------------------

    scsslint

------------------------------------------------------------------------------------------------*/
var gulp     = require('gulp');
var scsslint = require('gulp-scss-lint');
var config   = require('../config-pc').scsslint;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('scsslint:pc', function() {

    return gulp
        .src(config.src)
        .pipe(scsslint())
    ;

});