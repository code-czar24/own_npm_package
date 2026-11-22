# vb-currency-converter

A lightweight Node.js package to convert currencies in real-time.

## Installation

```bash
npm install vb-currency-converter
```

## Usage

```javascript
import { convertCurrency } from 'vb-currency-converter';

async function main() {
  // Convert 5 USD to INR
  const convertedAmount = await convertCurrency('USD', 'INR', 5);
  console.log(`Converted amount: ${convertedAmount}`);
}

main();
```

### Parameters

- `fromCurrency` *(string)*: Base 3-letter currency code (e.g. `'USD'`, `'EUR'`, `'INR'`).
- `toCurrency` *(string)*: Target 3-letter currency code (e.g. `'INR'`, `'USD'`, `'GBP'`).
- `units` *(number, optional)*: Amount to convert. Defaults to `1`.

### Return Value

Returns a `Promise<number>` resolving to the converted amount.

## License

Apache-2.0
