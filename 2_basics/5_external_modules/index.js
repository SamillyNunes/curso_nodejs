const minimist = require('minimist');

//external
const args = minimist(process.argv.slice(2));

//interno

const sum = require('./sum').sum;


const a = parseInt(args["a"])
const b = parseInt(args["b"])

console.log(sum(a, b));