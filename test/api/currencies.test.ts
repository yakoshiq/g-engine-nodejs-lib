import MockAdapter from 'axios-mock-adapter';
import { CurrenciesApi } from '../../src/api/currencies';
import { CurrencyPair, RateSource, ResponseBase, CurrencyRead } from '../../src/types';

describe('CurrenciesApi', () => {
  let api: CurrenciesApi;
  let mock: MockAdapter;
  const baseUrl = 'https://test-api.example.com';
  const testToken = 'test-token';

  beforeEach(() => {
    api = new CurrenciesApi(baseUrl, testToken);
    // @ts-ignore - получаем доступ к protected свойству для тестирования
    mock = new MockAdapter(api['client']);
  });

  afterEach(() => {
    mock.reset();
  });

  describe('getCurrencyRate', () => {
    it('должен получать курс USD к RUB из ЦБ РФ', async () => {
      const source = RateSource.cb_rf;
      const pair = CurrencyPair.USD_RUB;

      const currencyResponse: ResponseBase<CurrencyRead> = {
        success: true,
        message: 'Курс валюты получен успешно',
        data: {
          source: 'cb_rf',
          pair: 'USD:RUB',
          currency_rate: '90.5',
        },
      };

      mock.onGet('/currencies', { params: { source, pair } }).reply(200, currencyResponse);

      const result = await api.getCurrencyRate(source, pair);

      expect(result).toEqual(currencyResponse);
      expect(result.data?.currency_rate).toBe('90.5');
    });

    it('должен получать курс EUR к RUB из ЦБ РФ', async () => {
      const source = RateSource.cb_rf;
      const pair = CurrencyPair.EUR_RUB;

      const currencyResponse: ResponseBase<CurrencyRead> = {
        success: true,
        message: 'Курс валюты получен успешно',
        data: {
          source: 'cb_rf',
          pair: 'EUR:RUB',
          currency_rate: '98.7',
        },
      };

      mock.onGet('/currencies', { params: { source, pair } }).reply(200, currencyResponse);

      const result = await api.getCurrencyRate(source, pair);

      expect(result).toEqual(currencyResponse);
      expect(result.data?.currency_rate).toBe('98.7');
    });

    it('должен получать курс USD к RUB из Steam', async () => {
      const source = RateSource.steam;
      const pair = CurrencyPair.USD_RUB;

      const currencyResponse: ResponseBase<CurrencyRead> = {
        success: true,
        message: 'Курс валюты получен успешно',
        data: {
          source: 'steam',
          pair: 'USD:RUB',
          currency_rate: '92.3',
        },
      };

      mock.onGet('/currencies', { params: { source, pair } }).reply(200, currencyResponse);

      const result = await api.getCurrencyRate(source, pair);

      expect(result).toEqual(currencyResponse);
      expect(result.data?.currency_rate).toBe('92.3');
    });

    it('должен корректно обрабатывать ошибку при получении курса валюты', async () => {
      const source = RateSource.cb_rf;
      const pair = CurrencyPair.USD_RUB;

      const errorResponse = {
        success: false,
        message: 'Ошибка при получении курса валюты',
        data: null,
      };

      mock.onGet('/currencies', { params: { source, pair } }).reply(500, errorResponse);

      await expect(api.getCurrencyRate(source, pair)).rejects.toThrow();
    });
  });
});
