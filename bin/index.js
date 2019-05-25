#! /usr/bin/env node
var shell = require("shelljs");

shell.exec(`node -r esm ./lib/index.js ${process.argv[2]} ${process.argv[3]} ${process.argv[4]}`);
