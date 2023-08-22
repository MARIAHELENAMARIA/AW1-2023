//Construa uma classe Pessoa, contendo algumas propriedades, como nome, idade e sexo e um método apresenta(), que exiba uma mensagem de apresentação com os dados desta pessoa.

class Pessoa{

    nome;
    idade;
    sexo;

    constructor(nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;

        console.log(`Meu nome é ${nome}, tenho ${idade} anos e sou do sexo ${sexo}`);
    }
}

const p1 = new Pessoa("Maria", 19, "fem");