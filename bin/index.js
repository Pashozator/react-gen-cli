#! /usr/bin/env node
'use strict';

var shell = require("shelljs");

function parseArg(arg) {
	return arg != null ? arg : '';
}

function argumentsToString(args) {
	let output = '';

	for (const arg of args) {
		output += `${parseArg(arg)} `;
	}

	return output.trim();
}

const path = process.mainModule.filename;
const index = path.indexOf('/bin');
const root = path.slice(0, index);

const args = {
	command: process.argv[2],
	name: process.argv[3],
	flags: argumentsToString(process.argv.slice(4))
};

shell.exec(`node --experimental-modules --no-warnings ${root}/lib/index.mjs ${args.command} ${root} ${args.name} ${args.flags}`);
