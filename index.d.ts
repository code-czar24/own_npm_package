/**
 * Converts an amount from one currency to another using Freecurrencyapi.
 *
 * @param fromCurrency - The base 3-letter currency code (e.g. 'USD', 'EUR', 'INR').
 * @param toCurrency - The target 3-letter currency code (e.g. 'INR', 'USD', 'GBP').
 * @param units - The amount of units to convert (defaults to 1).
 * @returns A promise that resolves to the converted amount.
 */
export declare function convertCurrency(
  fromCurrency: string,
  toCurrency: string,
  units?: number
): Promise<number>;
