function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // || representa o OU
    const comprarTv50 = trabalho1 && trabalho2 // && representa a logica "I"
    //const comprarTV32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // != representa o ou exclusivo
    const manterSaudavel = !comprarSorvete // negação logico

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // chave valor 
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));