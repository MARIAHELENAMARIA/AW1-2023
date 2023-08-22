//Crie uma função mediaAritmetica(...termos) que receba como parâmetro um número indefinido de termos e retorne sua média aritmética.

var soma = 0;

function mediaAritmetica(args){
    for(var i=0; i<args.length; ++i){
        soma += args[i];
    }

    return soma/args.length;
}

console.log(mediaAritmetica([10, 15, 20, 25, 100]));