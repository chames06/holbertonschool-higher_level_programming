#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
  console.error('Usage: ./100-starwars_characters.js <movie_id>');
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

  let completed = 0;
  const characters = [];

  characterUrls.forEach((charUrl, index) => {
    request(charUrl, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const character = JSON.parse(body);
        characters[index] = character.name;
      }
      completed++;

      if (completed === characterUrls.length) {
        characters.forEach(name => {
          console.log(name);
        });
      }
    });
  });
});
