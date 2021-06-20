
const { src, dest, task, series } = require('gulp');
const fs = require('fs');
const del = require('del');
const gulpif = require('gulp-if');
const replace = require('gulp-replace');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const header = require("gulp-header");
const eslint = require('gulp-eslint');

const pack = () => JSON.parse(fs.readFileSync("./package.json", "utf8"));
const pkg = pack();
const year = new Date().getFullYear();

const banner = `/*!
* round-slider v${pkg.version}
*
* @website ${pkg.homepage}
* @copyright (c) 2015-${year} Soundar
* @license MIT
*/\n\n`;

const isJavaScript = file => file.extname === '.js';
const isCSS = file => file.extname === '.css';

function buildFiles(ext) {
    return src([`src/*.${ext}`])
        // replace the variables from the source files
        .pipe(replace('{VERSION}', pkg.version))
        .pipe(replace('{YEAR}', year))

        // add the CSS vendor prefixes (Browserslist config will be loaded from '.browserslistrc' file)
        .pipe(gulpif(isCSS, postcss([autoprefixer()])))

        // move the unminified version of source files to dist folder, for development purpose
        .pipe(dest('dist/'))

        // do the minification for JS and CSS files
        .pipe(gulpif(isJavaScript, uglify()))
        .pipe(gulpif(isCSS, cleanCSS({ level: { 1: { specialComments: 0 }} })))

        // rename the minified files with '.min' suffix
        .pipe(rename({ suffix: '.min' }))

        // add the banner content, since it should be removed from source files during minification
        .pipe(header(banner))

        // move the minified files also to the dist folder
        .pipe(dest('dist/'));
}

task('lint', () => {
    return src(['src/*.js'])
        .pipe(eslint())
        .pipe(eslint.formatEach('compact', process.stderr));
});
task('deleteFiles', () => del(['dist/*']));
task('build_js', series('lint', () => buildFiles('js')));
task('build_css', series(() => buildFiles('css')));
task('build', series('deleteFiles', 'build_js', 'build_css'));
