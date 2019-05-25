import nunjucks from 'nunjucks';
import fs from 'fs-extra';
import clc from 'cli-color';
import path from 'path';

export function createService(name, options) {
	const configuration = {
		root: path.resolve(name),
		name: path.basename(name)
	};

	if (!fs.existsSync(configuration.root)) {
		fs.mkdirSync(configuration.root, { recursive: true });
		console.log(`Directory ${path.dirname(name)} created`);
	}

	createCode(configuration);

	console.log(clc.green.bold(`Service ${configuration.name} created successfully!`));
}


function createCode({ root, name }) {
	const codeTemplate = nunjucks.render('./lib/schemas/service/code.html', { name });

	try {
		fs.writeFileSync(path.join(root, `${name}.service.js`), codeTemplate);
		console.log(`${name}.service.js created`);
	} catch (e) {
		console.error(clc.red.bold(`Error while creating ${name}.service.js`));
		console.error(e);
		process.exit();
	}
}
