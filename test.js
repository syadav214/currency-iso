const currencyISO = require('./index');
console.log(currencyISO.getISOCode('EUR'))
console.log(currencyISO.getFractionDigit('EUR'))
console.log(currencyISO.getCurrencyName('EUR'))
console.log(currencyISO.getCountriesUsingTheCurrency('EUR'))
//console.log(currencyISO.getFullInformation('EUR'))
//console.log(currencyISO.getAllCurrencies())