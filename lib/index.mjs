#! /usr/bin/env node
'use strict';

import { createComponent } from './creators/create-component';
import { createInterceptor } from './creators/create-interceptor';
import { createService } from './creators/create-service';
import { createTranslator } from './creators/create-translator';
import { createFunctionalComponent } from './creators/create-functional-component';
import program from 'commander';
import nunjucks from 'nunjucks';

program.version('1.0.6');

program
	.command('generate <rpath> <type> <name>')
	.alias('g')
	.option('-f, --functional', 'Make functional component')
	.option('-s, --style <type>', 'Choose style between .css, .scss, .sass and .less', 'scss')
	.action((rpath, type, name, options) => {
		nunjucks.configure(rpath);

		switch (type) {
			case 'c':
			case 'component':
				if (options.functional) {
					createFunctionalComponent(name, options);
					break;
				}

				createComponent(name, options);
				break;
			case 'i':
			case 'interceptor':
				createInterceptor(name, options);
				break;
			case 's':
			case 'service':
				createService(name, options);
				break;
			case 't':
			case 'translator':
				createTranslator(name, options);
				break;
		}
	});

program.parse(process.argv);
