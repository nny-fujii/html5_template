/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import watch from 'gulp-watch';
import setting from '../setting-sp/watch.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('watch:sp', function () {
    watch(setting.ect, function(){
        gulp.start(['ect:sp']);
    });

    watch(setting.iconfont, function(){
        gulp.start(['iconfont:sp']);
    });

    watch(setting.css, function(){
        gulp.start(['css:sp']);
    });

    watch(setting.js, function(){
        gulp.start(['webpack:sp']);
    });
});