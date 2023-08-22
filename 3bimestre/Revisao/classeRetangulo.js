//Construa uma classe Retangulo, contendo as propriedades altura e largura, e um método area() ou calculaArea(). A área de um retângulo é dada pela seguinte fórmula: A = b * h, onde A representa área, b representa base e h representa altura.

class Retangulo{
    constructor(altura, largura){
        this.largura = largura;
        this.altura = altura;
    }

    area(){
        return this.altura*this.largura;
    }
}

const ret = new Retangulo(50, 6);

console.log(ret.area());