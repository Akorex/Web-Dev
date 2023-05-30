const currency = require('./currency')

console.log("50 Canadian dollars equal", currency.canadianToUs(50), "In USD");
console.log("200 US dollars equal", currency.USToCanadian(200), "In Canadian Dollars");