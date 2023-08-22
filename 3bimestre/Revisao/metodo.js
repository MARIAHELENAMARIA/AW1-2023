let p1 = {
    nome: "Maria",
    idade: 19,
    apresentar: function(){
        console.log(`oi,meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

p1.apresentar();