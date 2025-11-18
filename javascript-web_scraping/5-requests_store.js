#!/usr/bin/node

/**
 * 5-request_store.js
 *
 * Downloads the body of a webpage and writes it to a file.
 *
 * Usage:
 *   ./5-request_store.js <URL> <output‑file>
 *
 * Example:
 *   ./5-request_store.js http://loripsum.net/api loripsum
 */

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const file = process.argv[3];

if (!url || !file) {
  console.error('Usage: ./5-request_store.js <URL> <output‑file>');
  process.exit(1);
}

request({ url, encoding: null }, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }

  if (res.statusCode !== 200) {
    console.error(`Error: Received status ${res.statusCode}`);
    return;
  }

  // body is a Buffer because we set encoding to null; convert to UTF‑8 string
  const content = body.toString('utf8');

  fs.writeFile(file, content, 'utf8', (writeErr) => {
    if (writeErr) console.log(writeErr);
    /* nothing else – the script ends silently on success */
  });
});
