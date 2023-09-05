var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var[dist, litros] = lines.shift().split(' ').map(Number);

var consumo = dist/litros;

console.log(consumo.toFixed(3) + "km/l\n");