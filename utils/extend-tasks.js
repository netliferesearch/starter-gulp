'use strict';

var merge = require('lodash.merge');
var defaultTasks = require('../tasks');

module.exports = function extendTasks(gulp, tasks) {
	var tasks = merge({}, defaultTasks, tasks);

	Object.keys(tasks).forEach(function(taskName) {
	    // Build argument array with task name and other params
	    var args = [taskName].concat(tasks[taskName]);

	    // Apply the arguments on gulp.task
	    gulp.task.apply(gulp, args);
	});
}
