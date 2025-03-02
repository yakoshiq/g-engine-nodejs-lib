import { ApiBase } from './base';
import { CurrencyRead, CurrencyPair, RateSource, ResponseBase } from '../types';

export class CurrenciesApi extends ApiBase {
  /**
   * Получение курсов валют
   * @param source Источник курса валют
   * @param pair Валютная пара
   * @returns Промис с курсом валюты
   */
  public async getCurrencyRate(source: RateSource, pair: CurrencyPair): Promise<ResponseBase<CurrencyRead>> {
    return this.get<ResponseBase<CurrencyRead>>('/currencies', { source, pair });
  }
} 