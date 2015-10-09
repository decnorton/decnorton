import gulp from 'gulp';
import sass from 'gulp-ruby-sass';

const config = {
    src: './src/',
    dest: '../assets/'
};

gulp.task('sass', () => {
    return sass(`${config.src}/scss/app.scss`)
        .on('error', sass.logError)
        .pipe(gulp.dest(`${config.dest}/css`));
});

gulp.task('default', ['sass']);
