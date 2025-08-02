import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// https://fixer.io/
const FIXER_API_KEY = process.env.FIXER_API_KEY;
const FIXER_API = `${process.env.FIXER_API_URL}?access_key=${FIXER_API_KEY}`;

// https://restcountries.eu/
const REST_COUNTRIES_API = process.env.REST_COUNTRIES_API_URL;
