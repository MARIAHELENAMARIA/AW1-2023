var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var[nome] = lines.shift().split(' ').map(String);
var[salario] = lines.shift().split(' ').map(Number);
var[vendas] = lines.shift().split(' ').map(Number);

var novo = salario + vendas*0.15;

console.log("TOTAL = R$ " + novo.toFixed(2));