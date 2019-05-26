#! /usr/bin/env node
'use strict';

import fs from 'fs-extra';
import path from 'path';
import nunjucks from 'nunjucks';
import clc from 'cli-color';

export function createFunctionalComponent(component, options) {
	const configuration = {
		root: path.resolve(component),
		name: path.basename(component),
		style: {
			extension: options.style
		}
	};

	if (!fs.existsSync(configuration.root)) {
		fs.mkdirSync(configuration.root, { recursive: true });
		console.log(`Directory ${path.dirname(component)} created`);
	}

	createCode(configuration);
	createStyle(configuration);
	createSpec(configuration);
	createStories(configuration);

	console.log(clc.green.bold(`Component ${configuration.name} created successfully!`));
}

function createCode({ root, name, style }) {
	const codeTemplate = nunjucks.render(`./lib/schemas/functionalcomponent/code.html`, { name, styleExtension: style.extension });

	try {
		fs.writeFileSync(path.join(root, `${name}.js`), codeTemplate);
		console.log(`${name}.js created`);
	} catch (e) {
		console.error(clc.red.bold(`Error while creating ${name}.js`));
		console.error(e);
		process.exit();
	}
}

function createStyle({ root, name, style }) {
	const styleTemplate = nunjucks.render(`./lib/schemas/functionalcomponent/style.html`, { name: name.toLowerCase() });

	try {
		fs.writeFileSync(path.join(root, `${name}.${style.extension}`), styleTemplate);
		console.log(`${name}.${style.extension} created`);
	} catch (e) {
		console.error(clc.red.bold(`Error while creating ${name}.${style.extension}`));
		console.error(e);
		process.exit();
	}
}

function createSpec({ root, name }) {
	const specTemplate = nunjucks.render(`./lib/schemas/functionalcomponent/spec.html`, { name });

	try {
		fs.writeFileSync(path.join(root, `${name}.spec.js`), specTemplate);
		console.log(`${name}.spec.js created`);
	} catch (e) {
		console.error(clc.red.bold(`Error while creating ${name}.spec.js`));
		console.error(e);
		process.exit();
	}
}

function createStories({ root, name }) {
	const storiesTemplate = nunjucks.render(`./lib/schemas/functionalcomponent/stories.html`, { name });

	try {
		fs.writeFileSync(path.join(root, `${name}.stories.js`), storiesTemplate);
		console.log(`${name}.stories.js created`);
	} catch (e) {
		console.error(clc.red.bold(`Error while creating ${name}.stories.js`));
		console.error(e);
		process.exit();
	}
}
