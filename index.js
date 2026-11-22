import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_WJ4yP1Ew8PmAUEluVGhvcmyA6wbj9WAL7P96WXJn');

/**
 * Converts an amount from one currency to another using Freecurrencyapi.
 *
 * @param {string} fromCurrency - The base 3-letter currency code (e.g., 'USD', 'EUR', 'INR').
 * @param {string} toCurrency - The target 3-letter currency code (e.g., 'INR', 'USD', 'GBP').
 * @param {number} [units=1] - The amount of units to convert (defaults to 1).
 * @returns {Promise<number>} - The converted amount.
 */
export async function convertCurrency(fromCurrency, toCurrency, units = 1) {
  if (!fromCurrency || !toCurrency) {
    throw new Error('Both fromCurrency and toCurrency codes must be provided.');
  }

  const base = fromCurrency.toUpperCase();
  const target = toCurrency.toUpperCase();

  const res = await freecurrencyapi.latest({
    base_currency: base,
    currencies: target
  });

  const multiplier = res?.data?.[target];
  if (multiplier === undefined) {
    throw new Error(`Exchange rate not found for ${base} to ${target}. Please verify currency codes.`);
  }

  return multiplier * units;
}
