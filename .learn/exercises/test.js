// Importar la función desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros deben ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
});

test("One dollar should be 146.26 yenes", function() {
    const yens = fromDollarToYen(1);
    // 1 dólar / 1.07 = 0.934 euros. 0.934 euros * 156.5 yen = 146.26...
    const expected = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBeCloseTo(146.26, 1);
});

test("1000 yenes should be 5.55 pounds", function() {
    const pounds = fromYenToPound(1000);
    // 1000 yenes / 156.5 = 6.39 euros. 6.39 euros * 0.87 = 5.55...
    const expected = (1000 / 156.5) * 0.87;
    expect(fromYenToPound(1000)).toBeCloseTo(5.55, 1);
});