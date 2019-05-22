#!usr/bin/env node
'use strict';

import { createComponent } from './creators/create-component';
import { createInterceptor } from './creators/create-interceptor';
import { createService } from './creators/create-service';
import { createTranslator } from './creators/create-translator';

const program = require('commander')
	.version(require('./package.json').version);

program
	.command('generate <type> <name>')
	.alias('g')
	.option('-s, --style <type>', 'Choose style between .css, .scss, .sass and .less', 'scss')
	.action((type, name, options) => {
		switch (type) {
			case 'component':
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
