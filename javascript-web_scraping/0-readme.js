#!/usr/bin/node
// 0-readme.js
const fs   = require('fs');
const path = process.argv[2];          // first argument after `node`

if (!path) {
  console.error('Usage: node 0-readme.js <file-path>');
  process.exit(1);
}

fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    /* Print the whole error object – it will include name, code, errno … */
    console.log(err);
  } else {
    /* The file was read successfully: print its content */
    console.log(data);
  }
});
