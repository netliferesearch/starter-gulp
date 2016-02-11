'use strict';

var merge = require('lodash.merge');
var defaultConfig = require('./config');

module.exports = {
	tasks: require('./tasks'),
	extendTasks: require('./utils/extend-tasks'),
	extendConfig: require('./utils/extend-config')
};
