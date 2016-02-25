'use strict';

var gulp = require('gulp');

var config = require('../config');

module.exports = function() {
    gulp.watch(config.src.scss, [require('./sass')]);
    gulp.watch(config.src.js, [require('./browserify')]);
    gulp.watch(config.src.images, [require('./images')]);
    gulp.watch(config.src.icons, [require('./inline-svg')]);
};
