const currencyISO = require('./index');
console.log(currencyISO.getISOCode('eur'))
console.log(currencyISO.getFractionDigits('eur'))
console.log(currencyISO.getCurrencyName('eur'))
console.log(currencyISO.getCountriesUsingTheCurrency('eur'))
//console.log(currencyISO.getFullInformation('eur'))
//console.log(currencyISO.getAllCurrencies())