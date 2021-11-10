const { readFileSync, writeFileSync } = require('fs')

console.log('start');

const first = readFileSync ('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync (
    './content/ab2.txt',
    `here we can come to the market: ${first}, ${second}`,
    {flag:'a'}
)
console.log('done with the task');
console.log('starting with the task');
