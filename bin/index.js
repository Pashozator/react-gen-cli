#! /usr/bin/env node
var shell = require("shelljs");

shell.exec(`node --experimental-modules ./lib/index.mjs ${process.argv[2]} ${process.argv[3]} ${process.argv[4]}`);
