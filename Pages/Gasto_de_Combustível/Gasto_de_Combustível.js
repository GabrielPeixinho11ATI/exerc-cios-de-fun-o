function combustivelGasto(tempoHoras, velocidadeMedia) {
    
    let consumoPorLitro = 12
    let distancia = tempoHoras * velocidadeMedia
    let litrosNecessarios = distancia / consumoPorLitro

    return litrosNecessarios
}

let gasto1 = combustivelGasto(10, 85)
let gasto2 = combustivelGasto(2, 92)
let gasto3 = combustivelGasto(22, 67)

console.log(gasto1.toFixed(3))
console.log(gasto2.toFixed(3))
console.log(gasto3.toFixed(3))
