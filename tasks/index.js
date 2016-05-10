'use strict';

module.exports = {
	// Browser sync
	'browser-sync': [require('./browser-sync')],

	// Assets
	'images': [require('./images')],
	'inline-svg': [require('./inline-svg')],
	'assets': [['images', 'inline-svg']],

	// Linting & statistic
	'lint-sass': [require('./lint-sass')],
	'lint-js': [require('./lint-js')],
	'css-stats': [require('./css-stats')],

	// Build
	'sass': [require('./sass')],
    'browserify': [require('./javascript')],
    'javascript': (!production ? [['lint-js','browserify']] : [['browserify']]),
	'gh-pages': [require('./gh-pages')],
	'watch': [require('./watch')],

	'build': [['assets', 'javascript', 'sass']],
	'default': [['build', 'browser-sync', 'watch']],
	'deploy': [['assets', 'build', 'sass', 'gh-pages']]
};
