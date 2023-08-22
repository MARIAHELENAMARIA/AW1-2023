//Crie uma função calculaAreaCirculo(raio) que calcule e retorne a área de um círculo com base em seu raio.

function calculaAreaCirculo(raio){
    let area;
    area = Math.PI*(raio*raio);
    return area;
}

console.log(calculaAreaCirculo(10));