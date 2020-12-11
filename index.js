const currData = require('./currencyData.js');

const getData = (code, field) => {
  code = code !== undefined && code !== '' ? code.toUpperCase() : code;
  if (currData[code] !== undefined) {
    if (field === 'all') return currData[code];
    else return currData[code][field];
  } else return undefined;
};

exports.getISOCode = (code) => getData(code, 'isoCode');

exports.getFractionDigit = (code) => getData(code, 'fractionDigit');

exports.getSymbol = (code) => getData(code, 'symbol');

exports.getUnicode = (code) => getData(code, 'unicode');

exports.getHtmlCode = (code) => getData(code, 'htmlCode');

exports.getHexCode = (code) => getData(code, 'hexCode');

exports.getCurrencyName = (code) => getData(code, 'currencyName');

exports.getCountriesUsingTheCurrency = (code) => getData(code, 'countries');

exports.getFullInformation = (code) => getData(code, 'all');

exports.getAllCurrencies = (code) => Object.keys(currData);
