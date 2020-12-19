# currency-iso
a javascript module to list and work on currency codes based on the ISO 4217 standard.

## Example

``` js
const { getISOCode, getFractionDigit } = require('currency-iso');

console.log(getISOCode('EUR')); // 978
console.log(getFractionDigit('EUR')); // 2
console.log(getFractionDigit('Nothing')); // undefined
console.log(getHtmlCode('EUR')); //&#x20AC;
```

### getISOCode(code)

Expects a currency code.
Returns the ISO Code for that currency code.  
If not found, it returns `undefined`.  

### getHtmlCode(code)

Expects a currency code.
Returns the html code for that currency code.          
If not found, it returns `undefined`.  

### getFractionDigit(code)

Expects a currency code.
Returns the Fraction Digit for that currency code.          
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
