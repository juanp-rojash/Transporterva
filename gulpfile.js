const {src,dest,series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

function minificar_css(){
    return src('css/*.css')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(rename('main.min.css'))
        .pipe(dest('dist'));
}

function minificar_js(){
    return src('js/*.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('dist'));
}

exports.cssmin = minificar_css;
exports.jsmin =  minificar_js;