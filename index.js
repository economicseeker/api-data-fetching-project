import axios from 'axios';
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
    const { data: { rates } } = await axios.get(FIXER_API);

    const euro = 1 / rates[fromCurrency]; //?
    const exchangeRate = euro * rates[toCurrency]; //?

    return exchangeRate;
}

//getExchangeRate('USD', 'AUD') //?

// Fetch data  about countries
const getCountries = async (currencyCode) => {
    const { data } = await axios.get(`${REST_COUNTRIES_API}/${currencyCode}`);

    return data.map(({ name }) => name.common); //?

}

// getCountries('AUD') //?

const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    fromCurrency = fromCurrency.toUpperCase();
    toCurrency = toCurrency.toUpperCase();

    const [countries, exchangeRate] = await Promise.all([
        await getCountries(toCurrency),
        await getExchangeRate(fromCurrency, toCurrency)
    ]);


    const convertedAmount = (amount * exchangeRate).toFixed(2); //?

    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`;
}

convertCurrency('USD', 'EUR', 20)
   .then(result => console.log(result))
   .catch(error => console.log(error)); //?

// Output the data