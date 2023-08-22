//Crie uma função imc(peso, altura) que receba os parâmetros peso e altura, e retorne o Índice de Massa Corporal resultante. 

function imc(peso, altura){
    let imc = peso/(altura*altura);
    return imc;
}

console.log(imc(103, 1.67));
