//Crie uma função ehPrimo(numero) que receba um número natural como parâmetro e retorne true caso o número seja primo ou false caso contrário.

function ehPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    
    return true;
}

console.log(ehPrimo(1));
console.log(ehPrimo(7));
console.log(ehPrimo(10));