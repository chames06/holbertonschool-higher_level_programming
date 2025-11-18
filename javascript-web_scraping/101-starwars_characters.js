#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
  console.error('Usage: ./101-starwars_characters.js <movie_id>');
  process.exit(1);
}

const url = `https://swapi-api.hbtn.io/api/films/${movieId}/`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Movie not found');
    process.exit(1);
  }

  const film = JSON.parse(body);
  const characterUrls = film.characters;

  function printCharacters (index) {
    if (index >= characterUrls.length) {
      console.log('OK');
      return;
    }

    request(characterUrls[index], (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const character = JSON.parse(body);
        console.log(character.name);
      }
      printCharacters(index + 1);
    });
  }

  printCharacters(0);
});
