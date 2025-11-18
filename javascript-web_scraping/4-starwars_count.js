#!/usr/bin/node

/**
 * 4-starwars_count.js
 *
 * Prints how many Star Wars films feature the character Wedge Antilles (ID 18).
 *
 * Usage:
 *   ./4-starwars_count.js <films-endpoint>
 *
 * Example:
 *   ./4-starwars_count.js https://swapi-api.hbtn.io/api/films
 *   # → 3
 */

const request = require('request');

const filmsUrl = process.argv[2];

if (!filmsUrl) {
  console.error('Usage: ./4-starwars_count.js <films-endpoint>');
  process.exit(1);
}

request({ url: filmsUrl, json: true }, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }

  if (res.statusCode !== 200) {
    console.error(`Error: Received status ${res.statusCode}`);
    return;
  }

  const films = body.results || [];
  const wedgeIdStr = '/people/18/';

  const count = films.reduce((acc, film) => {
    if (film.characters.some(url => url.includes(wedgeIdStr))) {
      return acc + 1;
    }
    return acc;
  }, 0);

  console.log(count);
});
