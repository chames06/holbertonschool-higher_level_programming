#!/usr/bin/node

const fs = require('fs')
const path = process.argv[2]

if (!path) {
  console.error('Usage: ./0-readme.js <file-path>')
  process.exit(1)
}

fs.readFile(path, 'utf8', (err, data) => {
  if (err) console.log(err)
  else console.log(data)
})
