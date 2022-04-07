// import the function sum from the app.js file
const { dollarYen, euroDollar, yenPound} = require('./app.js');

test ('dollar to yen', () => {
    let total = dollarYen(1, .92)

    expect(total).toBe(.92)
});

test ('euro to dollar', () => {
    let total = euroDollar(1, 1.2)

    expect(total).toBe(1.2)
});

test ('yen to pound', () => {
    let total = yenPound(1, .92)

    expect(total).toBe(.92)
});