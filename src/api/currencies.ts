/**
 * @fileoverview API для работы с валютами в G-Engine.
 * @module api/currencies
 */

import { ApiBase } from './base';
import { CurrencyRead, CurrencyPair, RateSource, ResponseBase } from '../types';

/**
 * API для работы с валютами.
 * Предоставляет методы для получения курсов валют из различных источников.
 *
 * @example
 * ```typescript
 * // Создание экземпляра API
 * const currenciesApi = new CurrenciesApi('https://b2b-api.ggsel.com', 'your-token');
 *
 * // Получение курса валюты
 * const currencyRate = await currenciesApi.getCurrencyRate(
 *   RateSource.cb_rf,
 *   CurrencyPair.USD_RUB
 * );
 *
 * console.log(`Курс ${currencyRate.data?.pair}: ${currencyRate.data?.currency_rate}`);
 * ```
 */
export class CurrenciesApi extends ApiBase {
  /**
   * Получает актуальный курс валюты из указанного источника.
   *
   * @param {RateSource} source - Источник курса валют (cb_rf - Центральный Банк РФ, steam - Steam)
   * @param {CurrencyPair} pair - Валютная пара (USD:RUB, EUR:RUB)
   * @returns {Promise<ResponseBase<CurrencyRead>>} Промис с курсом валюты
   *
   * @example
   * ```typescript
   * // Получение курса USD к RUB из ЦБ РФ
   * const usdRubRate = await currenciesApi.getCurrencyRate(
   *   RateSource.cb_rf,
   *   CurrencyPair.USD_RUB
   * );
   *
   * // Получение курса EUR к RUB из ЦБ РФ
   * const eurRubRate = await currenciesApi.getCurrencyRate(
   *   RateSource.cb_rf,
   *   CurrencyPair.EUR_RUB
   * );
   *
   * // Получение курса USD к RUB из Steam
   * const steamRate = await currenciesApi.getCurrencyRate(
   *   RateSource.steam,
   *   CurrencyPair.USD_RUB
   * );
   * ```
   */
  public async getCurrencyRate(
    source: RateSource,
    pair: CurrencyPair
  ): Promise<ResponseBase<CurrencyRead>> {
    return this.get<ResponseBase<CurrencyRead>>('/currencies', { source, pair });
  }
}
