#!/usr/bin/node

/**
 * 4-starwars_count.js
 *
 * Prints how many Star‑Wars films feature the character Wedge Antilles (ID 18).
 *
 * Usage:
 *   ./4-starwars_count.js <films‑endpoint>
 *
 * Example:
 *   ./4-starwars_count.js https://swapi-api.hbtn.io/api/films
 *   # → 3
 */

const request = require('request');

const filmsUrl = process.argv[2];

if (!filmsUrl) {
  console.error('Usage: ./4-starwars_count.js <films‑endpoint>');
  process.exit(1);
}

request({ url: filmsUrl, json: true }, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }

  if (res.statusCode !== 200) {
    console.log(`Error: Received status ${res.statusCode}`);
    return;
  }

  // The API returns an object with a "results" array of films
  const films = body.results || [];

  // Wedge Antilles is person ID 18.
  // In the SWAPI, each film contains a `characters` array with URLs like:
  //   https://swapi-api.hbtn.io/api/people/18/
  const wedgeUrl = `${filmsUrl}/../people/18/`.replace(/\/\.\//g, '/'); // normalise
  // However the returned URLs use the full base URL; we can just check for ID in the string:
  const wedgeIdStr = '/people/18/';

  const count = films.reduce((acc, film) => {
    if (film.characters.some(url => url.includes(wedgeIdStr))) {
      return acc + 1;
    }
    return acc;
  }, 0);

  console.log(count);
});
