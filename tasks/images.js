'use strict';

var gulp = require('gulp'),
    newer = require('gulp-newer');

var config = require('../config');

module.exports = function() {
    return gulp.src(config.src.images)
        .pipe(newer(config.dist.images))
        .pipe(gulp.dest(config.dist.images));
};
