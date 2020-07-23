# currency-iso
a javascript module to list and work on currency codes based on the ISO 4217 standard.

## Example

``` js
const { getISOCode, getFractionDigits } = require('currency-iso');

console.log(getISOCode('EUR')); // 978
console.log(getFractionDigits('EUR')); // 2
console.log(getFractionDigits('Nothing')); // undefined
```

### getISOCode(code)

Expects a currency code.
Returns the ISO Code for that currency code.  
If not found, it returns `undefined`.  

### getFractionDigits(code)

Expects a currency code.
Returns the Fraction Digits for that currency code. 
If not found, it returns `undefined`.  

### getCurrencyName(code)

Expects a currency code.
Returns the Currency Name for that currency code. 
If not found, it returns `undefined`. 

### getCountriesUsingTheCurrency(code)

Expects a currency code.
Returns an array of Countries using the currency code. 
If not found, it returns `undefined`. 

### getFullInformation(code)

Expects a currency code.
Returns the information for that currency code. 
If not found, it returns `undefined`. 

### getAllCurrencies()

Returns an array of all currency codes.

## Install

``` cli
npm install currency-iso
```

## License

MIT
