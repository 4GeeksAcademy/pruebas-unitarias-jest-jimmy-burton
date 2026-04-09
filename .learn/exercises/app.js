// Valores de conversión
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos las funciones
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos de dólar a euro, y de euro a yen
    let valueInEuro = valueInDollar / 1.07;
    let valueInYen = valueInEuro * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos de yen a euro, y de euro a libra
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = valueInEuro * 0.87;
    return valueInPound;
}

// Exportamos las funciones para usarlas en test.js
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };