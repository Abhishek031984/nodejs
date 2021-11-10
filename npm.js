// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const { flattenDeep } = require('lodash')
// const _ = require('bootstrap')

const items = ['AB',['BC',['CD',['DE']]]]
const newItems = flattenDeep(items);
console.log(newItems);