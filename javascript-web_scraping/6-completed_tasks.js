#!/usr/bin/node

/**
 * 6-completed_tasks.js
 *
 * Counts the number of completed tasks for each user.
 *
 * Usage:
 *   ./6-completed_tasks.js <todos‑endpoint>
 *
 * Example output (JSON object):
 * { '1': 11, '2': 8, ... }
 */

const request = require('request');

const url = process.argv[2];

if (!url) {
  console.error('Usage: ./6-completed_tasks.js <todos‑endpoint>');
  process.exit(1);
}

request({ url, json: true }, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }

  if (res.statusCode !== 200) {
    console.error(`Error: Received status ${res.statusCode}`);
    return;
  }

  // body is an array of todo objects
  const completedPerUser = {};

  body.forEach(todo => {
    if (todo.completed) {
      const uid = String(todo.userId);
      completedPerUser[uid] = (completedPerUser[uid] || 0) + 1;
    }
  });

  console.log(completedPerUser);
});
