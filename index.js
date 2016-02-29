'use strict';

var merge = require('lodash.merge');
var defaultConfig = require('./config');

module.exports = {
	tasks: require('./tasks'),
	config: require('./config'),
	browserSync: require('browser-sync'),
	extendTasks: require('./utils/extend-tasks'),
	extendConfig: require('./utils/extend-config')
};
