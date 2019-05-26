#! /usr/bin/env node
'use strict';

var shell = require("shelljs");

const path = process.mainModule.filename;
const index = path.indexOf('/bin');
const root = path.slice(0, index);

const args = {
	command: process.argv[2],
	name: process.argv[3],
	style: {
		command: process.argv[4] != null ? process.argv[4] : '',
		arg: process.argv[5] != null ? process.argv[5] : ''
	},
	functional: {
		command: process.argv[6] != null ? process.argv[6] : '',
	}
};

shell.exec(`node --experimental-modules --no-warnings ${root}/lib/index.mjs ${args.command} ${root} ${args.name} ${args.style.command} ${args.style.arg} ${args.functional.command}`);
