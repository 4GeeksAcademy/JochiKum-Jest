const {fromDollarToYen,fromEuroToDollar, fromYenToPound } = require('./app.js');

test('convirte 20 dolares a yenes', () =>{
    let change01 = fromDollarToYen(20);
    expect(change01).toBeCloseTo(2925.23,2)
});

test('convirte 10 euros a dolares', () =>{
    let change02 = fromEuroToDollar(10);
    expect(change02).toBeCloseTo(10.70,2)
});
test('convirte 1000 yenes a libras', () =>{
    let change03 = fromYenToPound(1000);
    expect(change03).toBeCloseTo(5.56,2)
});