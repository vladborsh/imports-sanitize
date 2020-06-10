const fs = require('fs');

const data = fs.readFileSync('./dist/src/index.js'); 
const fd = fs.openSync('./dist/src/index.js', 'w+');
const buffer = new Buffer('#!/usr/bin/env node\n\n');

fs.writeSync(fd, buffer, 0, buffer.length, 0); 
fs.writeSync(fd, data, 0, data.length, buffer.length);

fs.close(fd, () => {});