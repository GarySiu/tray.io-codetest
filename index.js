const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.replace(/\r/g, '').split('\n'));
})