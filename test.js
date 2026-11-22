import assert from 'node:assert';
import test from 'node:test';
import { convertCurrency } from './index.js';

test('convertCurrency exports a function', () => {
  assert.strictEqual(typeof convertCurrency, 'function');
});

test('convertCurrency throws on missing currency parameters', async () => {
  await assert.rejects(
    async () => {
      await convertCurrency();
    },
    {
      name: 'Error',
      message: 'Both fromCurrency and toCurrency codes must be provided.'
    }
  );
});
