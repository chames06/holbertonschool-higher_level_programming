#!/usr/bin/node

/**
 * Usage: ./100-starwars_characters.js <movie-id>
 *
 * Example:
 *   ./100-starwars_characters.js 3
 *
 * The script prints one character name per line for the given Star‑Wars movie.
 */

const request = require('request'); // ← Make sure you have it installed
const baseUrl = 'https://swapi-api.hbtn.io/api';

// ------------------------------------------------------------------
// Helpers -------------------------------------------------------------

/**
 * Make a GET request and parse JSON
 */
function getJSON (url, cb) {
  request({ url, json: true }, (err, res, body) => {
    if (err) return cb(err);
    if (res.statusCode !== 200) { return cb(new Error(`HTTP ${res.statusCode}`)); }
    cb(null, body);
  });
}

/**
 * Recursively fetch all pages of a paginated endpoint
 */
function fetchAll (url, acc = [], cb) {
  getJSON(url, (err, data) => {
    if (err) return cb(err);

    acc.push(...data.results);

    // If there's a next page, keep fetching
    if (data.next) {
      // The API returns absolute URLs; we can use them directly.
      fetchAll(data.next, acc, cb);
    } else {
      cb(null, acc);
    }
  });
}

// ------------------------------------------------------------------
// Main ---------------------------------------------------------------

const movieId = process.argv[2];

if (!movieId) {
  console.error('❌  You must provide a movie ID as the first argument.');
  process.exit(1);
}

const movieUrl = `${baseUrl}/films/${movieId}/`;

getJSON(movieUrl, (err, movie) => {
  if (err) {
    console.error(`❌  Could not fetch movie ${movieId}:`, err.message);
    process.exit(1);
  }

  const characterUrls = movie.characters; // array of URLs

  // Fetch every character page
  fetchAll(characterUrls[0], [], (e, chars) => {
    if (e) {
      console.error('❌  Error fetching characters:', e.message);
      process.exit(1);
    }

    // Print each name on its own line
    chars.forEach((c) => console.log(c.name));
  });
});
