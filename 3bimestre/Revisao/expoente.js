//Crie uma função recursiva potencia(num, expoente) que receba como parâmetros um número (num) e um expoente, e retorne a potenciação/exponenciação de num elevado a expoente. Nesta função não são permitidas estruturas de repetição.

function potencia(num, expoente){
    if(num == 1){
        return 1;
    }
    else{
        var res = conta(num,expoente-1);
        return res;
    }
}

function conta(num, x){
    return num**x;
}

console.log(potencia(6, 9));