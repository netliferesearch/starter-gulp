'use strict';

module.exports = {
	// Browser sync
	'browser-sync': [require('./browser-sync')],

	// Assets
	'images': [require('./images')],
	'inline-svg': [require('./inline-svg')],
	'assets': [['images', 'inline-svg']],

	// Linting & statistic
	'sass-lint': [require('./sass-lint')],
	'eslint': [require('./eslint')],
	'css-stats': [require('./css-stats')],

	// Build
	'sass': [require('./sass')],
	'browserify': [['eslint'], require('./browserify')],
	'gh-pages': [require('./gh-pages')],
	'watch': [require('./watch')],

	'build': [['assets', 'browserify', 'sass']],
	'default': [['build', 'browser-sync', 'watch']],
	'deploy': [['assets', 'build', 'sass', 'gh-pages']]
};
