
// let oneEuroIs = {
//     "JPY": 127.9, // japan yen
//     "USD": 1.2, // us dollar
//     "GBP": 0.8, // british pound
// }

const dollarYen = (dollar, yen) => {
    return dollar * yen
}

const euroDollar = (euro, dollar) => {
    return euro * dollar
}

const yenPound = (yen, pound) => {
    return yen * pound
}

module.exports = { dollarYen, euroDollar, yenPound };