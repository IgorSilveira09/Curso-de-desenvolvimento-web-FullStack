// estrategia  1 para gerar valor padrao
function soma1(a, b, c) {

    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c

}

console.log(soma1())

// PADRÃO ES2015

function soma1(a = 1, b = 1, c = 1) {

    return a + b + c
}

console.log(soma1())