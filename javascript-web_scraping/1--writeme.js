#!/usr/bin/node

const fs   = require('fs');
const path = process.argv[2];      // first argument – file path
const text = process.argv[3];      // second argument – string to write

if (!path || !text) {
  console.error('Usage: ./1-writeme.js <file-path> "<string>"');
  process.exit(1);
}

fs.writeFile(path, text, 'utf8', (err) => {
  if (err) {
    /* Print the error object – it contains code, errno, path … */
    console.log(err);
  }
});
