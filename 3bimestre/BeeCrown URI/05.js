var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var[A, B] = lines.shift().split(' ').map(Number);

var PROD = A*B;

console.log('PROD = ' + PROD +"\n");