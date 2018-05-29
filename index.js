const fs = require('fs');
const Hoover = require('./lib/hoover');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const h = new Hoover(data);
  console.log(h.report());
})