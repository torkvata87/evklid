// import gulp from 'gulp';
// import imagemin from 'gulp-imagemin';
// import webp from 'gulp-webp';
// import svgo from 'imagemin-svgo';
// import newer from 'gulp-newer';
// import gulpif from 'gulp-if';
// import concat from 'gulp-concat';
// import htmlmin from 'gulp-htmlmin';
// import autoprefixer from 'gulp-autoprefixer';
// import cleanCSS from 'gulp-clean-css';
// import babel from 'gulp-babel';
// import notify from 'gulp-notify';
// import uglify from 'gulp-uglify';
// import sourcemaps from 'gulp-sourcemaps';
// import browserSync from 'browser-sync';
// import del from 'del';
//
// const {src, dest, series, watch, parallel} = gulp;
// let prod = false;
//
// const paths = {
//     src: {
//         images: 'src/img/**/*.{jpg,jpeg,png,svg}',
//         svg: 'src/img/svg/**/*.svg',
//         js: './src/js/**/*.js',
//         css: './src/css/**/*.css',
//         html: './src/**/*.html',
//         fonts: './src/fonts/**/*.*'
//     },
//     dest: {
//         images: prod ? 'dist/img' : 'app/img',
//         svg: prod ? 'dist/img/svg' : 'app/img/svg',
//         js: prod ? 'dist/js' : 'app/js',
//         css: prod ? 'dist/css' : 'app/css',
//         html: prod ? 'dist' : 'app'
//     }
// };
//
// export const processImages = () => {
//     return src(paths.src.images)
//         .pipe(newer(paths.dest.images))
//         .pipe(imagemin([
//             svgo({
//                 plugins: [
//                     {name: 'removeTitle', active: true},
//                     {name: 'removeViewBox', active: false},
//                 ]
//             })
//         ]))
//         .pipe(dest(paths.dest.images));
// };
//
// export const processSVG = () => {
//     return src('src/img/svg/**/*.svg')
//         .pipe(newer('app/img/svg'))
//         .pipe(imagemin([
//             imagemin.svgo({
//                 plugins: [
//                     {
//                         name: 'preset-default'
//                     },
//                     {
//                         name: 'removeAttrs',
//                         params: {
//                             attrs: '(fill|stroke)'
//                         }
//                     }
//                 ]
//             })
//         ]))
//         .pipe(dest('app/img/svg'));
// };
//
// export const convertToWebP = () => {
//     return src(paths.src.images)
//         .pipe(newer(paths.dest.images))
//         .pipe(webp({quality: 75}))
//         .pipe(dest(paths.dest.images));
// };
//
// const isProd = (done) => {
//     prod = true;
//     paths.dest.images = 'dist/img';
//     paths.dest.svg = 'dist/img/svg';
//     paths.dest.js = 'dist/js';
//     paths.dest.css = 'dist/css';
//     paths.dest.html = 'dist';
//     done();
// };
//
// const clean = () => {
//     return del([prod ? "dist" : "app"]);
// };
//
// const fonts = () => {
//     return src("./src/fonts/**/*.*")
//         .pipe(dest(prod ? "dist/fonts" : "app/fonts"));
// };
//
// const styles = () => {
//     return src("./src/css/**/*.css")
//         .pipe(autoprefixer({cascade: false}))
//         .pipe(gulpif(prod, cleanCSS({level: 2})))
//         .pipe(gulpif(!prod, sourcemaps.write(".")))
//         .pipe(dest(prod ? "dist/css" : "app/css"))
//         .pipe(browserSync.stream());
// };
//
// const htmlMinify = () => {
//     return src("./src/**/*.html")
//         .pipe(gulpif(prod, htmlmin({collapseWhitespace: true})))
//         .pipe(dest(prod ? "dist" : "app"))
//         .pipe(browserSync.stream());
// };
//
// const scripts = () => {
//     return src(paths.src.js)
//         .pipe(gulpif(!prod, sourcemaps.init()))
//         .pipe(babel({ presets: ['@babel/env'] }))
//         // .pipe(concat("tabs.js"))
//         .pipe(gulpif(prod, uglify().on('error', notify.onError())))
//         .pipe(gulpif(!prod, sourcemaps.write('.')))
//         .pipe(dest(paths.dest.js))
//         .pipe(browserSync.stream());
// };
//
// const watchFiles = () => {
//     browserSync.init({
//         server: {baseDir: prod ? "dist" : "app"},
//     });
//
//     watch(paths.src.css, styles);
//     watch(paths.src.html, htmlMinify);
//     watch(paths.src.js, scripts);
//     watch(paths.src.images, processImages);
//     watch(paths.src.svg, processSVG);
//     watch(paths.src.fonts, fonts);
//     watch(`./${prod ? 'dist' : 'app'}/*.html`).on('change', browserSync.reload);
// };
//
// export const dev = series(
//     clean,
//     fonts,
//     styles,
//     parallel(processImages, processSVG, convertToWebP),
//     scripts,
//     htmlMinify,
//     watchFiles
// );
//
// export const build = series(
//     isProd,
//     clean,
//     fonts,
//     styles,
//     parallel(processImages, processSVG, convertToWebP),
//     scripts,
//     htmlMinify
// );
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import svgo from 'imagemin-svgo';
import newer from 'gulp-newer';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import htmlmin from 'gulp-htmlmin';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import babel from 'gulp-babel';
import notify from 'gulp-notify';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import del from 'del';

const {src, dest, series, watch, parallel} = gulp;

const paths = {
    src: {
        images: 'src/img/**/*.{jpg,jpeg,png,svg}',
        svg: 'src/img/svg/**/*.svg',
        js: './src/js/**/*.js',
        css: './src/css/**/*.css',
        html: './src/**/*.html',
        fonts: './src/fonts/**/*.*'
    },
    dest: {
        images: 'dist/img',
        svg: 'dist/img/svg',
        js: 'dist/js',
        css: 'dist/css',
        html: 'dist',
        fonts: 'dist/fonts'
    }
};

export const processImages = () => {
    return src(paths.src.images)
        .pipe(newer(paths.dest.images))
        .pipe(imagemin([
            svgo({
                plugins: [
                    {name: 'removeTitle', active: true},
                    {name: 'removeViewBox', active: false},
                ]
            })
        ]))
        .pipe(dest(paths.dest.images));
};

export const processSVG = () => {
    return src(paths.src.svg)
        .pipe(newer(paths.dest.svg))
        .pipe(imagemin([
            imagemin.svgo({
                plugins: [
                    {
                        name: 'preset-default'
                    },
                    {
                        name: 'removeAttrs',
                        params: {
                            attrs: '(fill|stroke)'
                        }
                    }
                ]
            })
        ]))
        .pipe(dest(paths.dest.svg));
};

export const convertToWebP = () => {
    return src(paths.src.images)
        .pipe(newer(paths.dest.images))
        .pipe(webp({quality: 75}))
        .pipe(dest(paths.dest.images));
};

const clean = () => {
    return del(['dist']);
};

const fonts = () => {
    return src(paths.src.fonts)
        .pipe(dest(paths.dest.fonts));
};

const styles = () => {
    return src(paths.src.css)
        .pipe(autoprefixer({cascade: false}))
        .pipe(cleanCSS({level: 2}))
        .pipe(dest(paths.dest.css))
        .pipe(browserSync.stream());
};

const htmlMinify = () => {
    return src(paths.src.html)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(dest(paths.dest.html))
        .pipe(browserSync.stream());
};

const scripts = () => {
    return src(paths.src.js)
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(uglify().on('error', notify.onError()))
        .pipe(dest(paths.dest.js))
        .pipe(browserSync.stream());
};

const watchFiles = () => {
    browserSync.init({
        server: {baseDir: 'dist'},
    });

    watch(paths.src.css, styles);
    watch(paths.src.html, htmlMinify);
    watch(paths.src.js, scripts);
    watch(paths.src.images, series(processImages, convertToWebP));
    watch(paths.src.svg, processSVG);
    watch(paths.src.fonts, fonts);
    watch('./dist/*.html').on('change', browserSync.reload);
};

export const build = series(
    clean,
    fonts,
    styles,
    parallel(processImages, processSVG, convertToWebP),
    scripts,
    htmlMinify
);

export const dev = series(
    clean,
    fonts,
    styles,
    parallel(processImages, processSVG, convertToWebP),
    scripts,
    htmlMinify,
    watchFiles
);
