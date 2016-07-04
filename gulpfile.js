var gulp = require('gulp'),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    css = require("gulp-minify-css")

gulp.task('concat', function () {
    gulp.src(['js/lib/jquery.min.js','js/lib/bootstrap.min.js','js/lib/jquery.metisMenu.js'])//要合并的文件
        .pipe(uglify())
        .pipe(concat('lib.js'))// 合并匹配到的js文件并命名为 "lib.js"
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename('lib.min.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function () {
    gulp.src('css/lib/*.css')//要合并的文件
        .pipe(css())
        .pipe(concat('lib.css'))// 合并匹配到的js文件并命名为 "lib.js"
        .pipe(gulp.dest('dist/css'))
        .pipe(css())
        .pipe(rename('lib.min.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default',['concat','css']);







