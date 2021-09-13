// recurso do ES2015

const pessoa = {
    nome: "Igor",
    idade: 25,
    endereco:{
        logradouro:"Rua abc",
        numero:99
    }
}

const {nome, idade} = pessoa; // forma do destructuring {}
console.log(nome,idade);
