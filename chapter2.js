const { writeFileSync } = require('fs')

const first = writeFileSync('./content/first.txt', 'Abhishek Bhattacharya');
const second = writeFileSync('./content/second.txt', 'Priyanka Kundu');

console.log(first);
console.log(second);
