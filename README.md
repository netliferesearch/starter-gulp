# Netlife gulp starter
Common gulptasks with interface for overriding tasks and configs in starter packs.

## Installation
First install the gulp starter by adding `netliferesearch/starter-gulp` to your `package.json` file, or by simply issuing the following command in the terminal when standing in your projects root folder

```sh
npm i --save-dev netliferesearch/starter-gulp
```

If npm ends by telling you something like the line shown below, you need to add `gulp` as a dev dependency in your project.

```sh
npm WARN starter-gulp@1.0.0 requires a peer of gulp@^3.9.0 but none was installed.
```

## Configuring gulp
Now, all that is left in order for the gulp tasks to work in your project is connecting gulp with the starter gulp tasks. Create a `gulpfile.js` in your root dir that looks something like this:

```js
'use strict';

var gulp = require('gulp');
var starterGulp = require('starter-gulp');

starterGulp.extendConfig({ /* config overrides */ });
starterGulp.extendTasks(gulp, { /* gulp task overrides */ });
```

Now, you should be able to run `gulp` in your project.

## Customizing the gulp setup

### Extending the gulp
If you want to override the default gulp config, you pass an object to the `extendConfig` function in the example below. This config is merged into the default config and will override the override properties with the same name in the default config.

### Adding or overriding gulp tasks
In most projects you'll probably need to tweak the gulp tasks a bit, and this is done by passing an object containing the tasks that you want to override. An example of a task that logs foo to the console and requires the task `bar` to be run before it runs can be passed to the `extendTasks` function like this:

```js
starterGulp.extendTasks(gulp, {
	// The key is the name of the task
	foo: [
		['bar'], // List of dependencies
		function() { // Task function like a usual gulp task
			console.log('foo');
		}
	]
});
```

If you're adding multiple tasks, you will of course want to split it into separate files:

```js
starterGulp.extendTasks(gulp, {
	bar: [require('path/to/bar')] // bar task with no deps
	foo: [['bar'], require('path/to/foo')] // foo task with dependency on bar
});
```