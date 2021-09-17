Number.prototype.entre = function (inicio, fim){

    return this >= inicio && this <= fim
}
const imprimirResultado = function (nota) {

    if (nota.entre(9, 10)){

        console.log("Quadro de honra")
    }else if(nota.entre(7, 8.00)){
        console.log("Reprovado")
    }else if(nota.entre(4, 6.99)){
        console.log("recuperação")
    } else {

        console.log("NOTA INVALIDA")
    }
}

imprimirResultado (4)