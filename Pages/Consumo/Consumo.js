function consumoMedio(distancia, combustivelGasto) {
    return distancia / combustivelGasto
}


let consumo1 = consumoMedio(500, 35.0)
let consumo2 = consumoMedio(2254, 124.4)
let consumo3 = consumoMedio(4554, 464.6)

console.log(`${consumo1.toFixed(3)} km/l `)
console.log(`${consumo2.toFixed(3)} km/l `)
console.log(`${consumo3.toFixed(3)} km/l `)
