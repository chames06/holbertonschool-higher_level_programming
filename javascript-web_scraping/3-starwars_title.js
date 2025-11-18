#!/usr/bin/node

/**
 * 3-starwars_title.js
 *
 * Prints the title of a Star Wars film given its episode ID.
 *
 * Usage:
 *   ./3-starwars_title.js <id>
 *
 * Example:
 *   ./3-starwars_title.js 1
 *   # → A New Hope
 */

const request = require('request');

const id = process.argv[2];

if (!id) {
  console.error('Usage: ./3-starwars_title.js <film-id>');
  process.exit(1);
}

const url = `https://swapi-api.hbtn.io/api/films/${id}`;

request({ url, json: true }, (err, res, body) => {
  if (err) {
    /* Network or request error */
    console.log(err);
    return;
  }

  if (res.statusCode !== 200) {
    /* Non‑OK HTTP status – print the status code for clarity */
    console.log(`Error: Received status ${res.statusCode}`);
    return;
  }

  /* The API returns a JSON object with a "title" field */
  console.log(body.title);
});
