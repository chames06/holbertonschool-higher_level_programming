#!/usr/bin/env node

/**
 * 2-statuscode.js
 *
 * Displays the HTTP status code of a GET request.
 *
 * Usage:
 *   ./2-statuscode.js <URL>
 *
 * Example:
 *   ./2-statuscode.js https://intranet.hbtn.io/status
 *   # prints: code: 200
 */

const request = require('request');

const url = process.argv[2];

if (!url) {
  console.error('Usage: ./2-statuscode.js <URL>');
  process.exit(1);
}

request({ url, method: 'GET' }, (err, res) => {
  if (err) {
    /* If the request fails (e.g. network error), print the error object */
    console.log(err);
  } else {
    console.log(`code: ${res.statusCode}`);
  }
});

