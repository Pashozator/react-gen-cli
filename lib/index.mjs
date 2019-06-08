#! /usr/bin/env node
'use strict';

import { createComponent } from './creators/create-component';
import { createInterceptor } from './creators/create-interceptor';
import { createService } from './creators/create-service';
import { createTranslator } from './creators/create-translator';
import { createFunctionalComponent } from './creators/create-functional-component';
import { createComponentConnectedToStore } from './creators/create-component-connected-to-store';
import { createFunctionalComponentConnectedToStore } from './creators/create-functional-component-connected-to-store';
import program from 'commander';
import nunjucks from 'nunjucks';

program.version('1.0.11');

program.command('component <rpath> <name>')
	.alias('c')
	.option('-f, --functional', 'Make functional component')
	.option('-c, --connected', 'Connect component to the redux store')
	.option('-s, --style <type>', 'Choose style between .css, .scss, .sass and .less', 'scss')
	.action((rpath, name, options) => {
		nunjucks.configure(rpath);

		switch (true) {
			case options.functional && options.connected:
				return createFunctionalComponentConnectedToStore(name, options);
			case options.functional:
				return createFunctionalComponent(name, options);
			case options.connected:
				return createComponentConnectedToStore(name, options);
			default:
				return createComponent(name, options);
		}
	});

program.command('service <rpath> <name>')
	.alias('s')
	.action((rpath, name, options) => {
		nunjucks.configure(rpath);

		createService(name, options);
	});

program.command('translator <rpath> <name>')
	.alias('t')
	.action((rpath, name, options) => {
		nunjucks.configure(rpath);

		createTranslator(name, options);
	});

program.command('interceptor <rpath> <name>')
	.alias('i')
	.action((rpath, name, options) => {
		nunjucks.configure(rpath);

		createInterceptor(name, options);
	});

program.parse(process.argv);
