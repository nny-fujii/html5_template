/*------------------------------------------------------------------------------------------------

    build

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('build:pc', ['ect:pc', 'iconfont:pc', 'css:pc', 'webpack:pc']);