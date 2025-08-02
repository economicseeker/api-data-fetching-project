const axios = require ('axios');
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// https://fixer.io/
const FIXER_API_KEY = process.env.FIXER_API_KEY;
const FIXER_API = `${process.env.FIXER_API_URL}?access_key=${FIXER_API_KEY}`;

// https://restcountries.eu/
const REST_COUNTRIES_API = process.env.REST_COUNTRIES_API_URL;


// Fetch data about currencies
const getExchangeRate = async (fromCurrency, toCurrency) => {
    try {
        const { data: { rates } } = await axios.get(FIXER_API);

        const euro = 1 / rates[fromCurrency]; //?
        const exchangeRate = euro * rates[toCurrency]; //?
    
        return exchangeRate;
    } catch (error) {
        throw new Error(`Unable to get exchange rate for ${fromCurrency} and ${toCurrency}.`);
    }
}

//getExchangeRate('USD', 'AUD') //?

// Fetch data  about countries
const getCountries = async (currencyCode) => {
    try {   
        const { data } = await axios.get(`${REST_COUNTRIES_API}/${currencyCode}`);
        return data.map(({ name }) => name.common); //?
    
    } catch (error) {
        throw new Error(`Unable to get countries for ${currencyCode}.`);
   
    }
}

// getCountries('AUD') //?

const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    fromCurrency = fromCurrency.toUpperCase();
    toCurrency = toCurrency.toUpperCase();

    const [countries, exchangeRate] = await Promise.all([
         getCountries(toCurrency),
         getExchangeRate(fromCurrency, toCurrency)
    ]);


    const convertedAmount = (amount * exchangeRate).toFixed(2); //?

    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`;
}

convertCurrency('USD', 'EUR', 20)
   .then(result => console.log(result))
   .catch(error => console.log(error)); //?

// Output the data