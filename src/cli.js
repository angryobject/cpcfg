#!/usr/bin/env node

const args = process.argv.slice(2);
const cwd = process.cwd();

require('./index')(cwd, ...args);
