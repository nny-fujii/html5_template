/*------------------------------------------------------------------------------------------------

    scsslint

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import scsslint from 'gulp-scss-lint';
import setting from '../setting-pc/js-hint.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('scsslint:pc', function() {

    return gulp
        .src(setting.src)
        .pipe(scsslint())
    ;

});