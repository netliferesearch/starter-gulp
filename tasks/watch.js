'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var config = require('../config');

module.exports = function() {
    gulp.watch(config.src.scss, ['sass']);
    gulp.watch(config.src.js, ['browserify']);
    gulp.watch(config.src.images, ['images']);
    gulp.watch(config.src.icons, ['inline-svg']);
    gulp.watch(config.dist.html).on('change', browserSync.reload);
};
