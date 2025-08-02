# 🌍 API Data Fetching Project

A Node.js application that fetches real-time currency exchange rates and country information using external APIs.

## 🚀 Features

- **Real-time Currency Conversion**: Convert between different currencies using live exchange rates
- **Country Information**: Get information about countries that use specific currencies
- **Environment Variable Management**: Secure API key management using dotenv
- **Error Handling**: Comprehensive error handling for API rate limits and invalid requests
- **Modern JavaScript**: Built with ES6+ features and async/await

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Fixer API key (free tier available)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/economicseeker/api-data-fetching-project.git
   cd api-data-fetching-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file and add your API keys:
   ```env
   # Fixer API Configuration
   FIXER_API_KEY=your_actual_fixer_api_key_here
   FIXER_API_URL=https://data.fixer.io/api/latest
   
   # Rest Countries API Configuration
   REST_COUNTRIES_API_URL=https://restcountries.com/v3.1/currency
   ```

## 🔑 Getting API Keys

### Fixer API
1. Visit [Fixer.io](https://fixer.io/)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Free tier includes 100 requests per month

## 🎯 Usage

### Basic Currency Conversion
```javascript
import { convertCurrency } from './index.js';

// Convert USD to EUR
convertCurrency('USD', 'EUR', 100)
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### Get Exchange Rate Only
```javascript
import { getExchangeRate } from './index.js';

// Get USD to TRY exchange rate
getExchangeRate('USD', 'TRY')
  .then(rate => console.log(`1 USD = ${rate} TRY`))
  .catch(error => console.error(error));
```

### Get Countries by Currency
```javascript
import { getCountries } from './index.js';

// Get countries that use EUR
getCountries('EUR')
  .then(countries => console.log(countries))
  .catch(error => console.error(error));
```

## 🏃‍♂️ Running the Application

```bash
node index.js
```

The application will:
1. Convert 20 USD to TRY
2. Display the exchange rate
3. Show countries where TRY can be used

## 📊 API Endpoints Used

### Fixer API
- **Base URL**: `https://data.fixer.io/api/latest`
- **Purpose**: Real-time currency exchange rates
- **Rate Limit**: 100 requests/month (free tier)

### Rest Countries API
- **Base URL**: `https://restcountries.com/v3.1/currency`
- **Purpose**: Country information by currency code
- **Rate Limit**: No rate limit (free)

## 🛡️ Error Handling

The application handles various error scenarios:

- **429 Rate Limit Exceeded**: When API request limits are reached
- **401 Unauthorized**: Invalid API key
- **404 Not Found**: Currency or country not found
- **Network Errors**: Connection issues

## 📁 Project Structure

```
api-data-fetching-project/
├── index.js              # Main application file
├── package.json          # Project dependencies
├── .env                  # Environment variables (not in git)
├── .env.example          # Environment variables template
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `FIXER_API_KEY` | Your Fixer API key | `abc123def456` |
| `FIXER_API_URL` | Fixer API base URL | `https://data.fixer.io/api/latest` |
| `REST_COUNTRIES_API_URL` | Rest Countries API URL | `https://restcountries.com/v3.1/currency` |

## 🚨 Rate Limiting

- **Fixer API**: 100 requests per month (free tier)
- **Rest Countries API**: No rate limit
- The application includes error handling for rate limit exceeded errors

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/economicseeker/api-data-fetching-project/issues) page
2. Create a new issue with detailed information
3. Include error messages and steps to reproduce

## 🔗 Links

- [Fixer API Documentation](https://fixer.io/documentation)
- [Rest Countries API](https://restcountries.com/)
- [Node.js Documentation](https://nodejs.org/docs/)

---

**Made with ❤️ for learning API integration and data fetching**
