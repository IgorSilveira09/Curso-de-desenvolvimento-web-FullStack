function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0

while (opcao != -3) {

    opcao = getInteiroAleatorioEntre(-3, 10)

    console.log(`Opção escolhida foi ${opcao}`)
}

console.log('até logo!');