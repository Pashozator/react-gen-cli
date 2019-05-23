#!usr/bin/env node
'use strict';

import { createComponent } from './creators/create-component';
import { createInterceptor } from './creators/create-interceptor';
import { createService } from './creators/create-service';
import { createTranslator } from './creators/create-translator';
import { createFunctionalComponent } from './creators/create-functional-component';

const program = require('commander')
	.version(require('./package.json').version);

program
	.command('generate <type> <name>')
	.alias('g')
	.option('-f, --functional', 'Make functional component')
	.option('-s, --style <type>', 'Choose style between .css, .scss, .sass and .less', 'scss')
	.action((type, name, options) => {
		switch (type) {
			case 'component':
				if (options.functional) {
					createFunctionalComponent(name, options);
					break;
				}

				createComponent(name, options);
				break;
			case 'interceptor':
				createInterceptor(name, options);
				break;
			case 'service':
				createService(name, options);
				break;
			case 'translator':
				createTranslator(name, options);
				break;
		}
	});

program.parse(process.argv);
