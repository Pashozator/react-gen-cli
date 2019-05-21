#!usr/bin/env node
'use strict';

import { createComponent } from './creators/create-component';

const program = require('commander')
	.version(require('./package.json').version);

program
	.command('generate <name>')
	.alias('g')
	.option('-s, --style <type>', 'Choose style between .css, .scss, .sass and .less', 'scss')
	.action((component, options) => createComponent(component, options));

program.parse(process.argv);
