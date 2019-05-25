#! /usr/bin/env node
var shell = require("shelljs");

const path = process.mainModule.filename;
const index = path.indexOf('/bin');
const root = path.slice(0, index);

shell.exec(`node --experimental-modules ${root}/lib/index.mjs ${process.argv[2]} ${root} ${process.argv[3]} ${process.argv[4]}`);
