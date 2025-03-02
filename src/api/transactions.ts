/**
 * @fileoverview API для работы с транзакциями в G-Engine.
 * @module api/transactions
 */

import { ApiBase } from './base';
import { TransactionRead, TransactionReadObserver } from '../types';

/**
 * Параметры для получения списка транзакций.
 *
 * @interface GetTransactionsParams
 * @property {boolean} [user_cache] - Использовать кэш пользователей
 * @property {number} [limit] - Максимальное количество транзакций в ответе
 * @property {number} [offset] - Смещение для пагинации
 * @property {string} [sort_by] - Поле для сортировки
 * @property {string} [sort_order] - Порядок сортировки ('asc' или 'desc')
 * @property {string} [start_date] - Начальная дата для фильтрации (в формате YYYY-MM-DD)
 * @property {string} [end_date] - Конечная дата для фильтрации (в формате YYYY-MM-DD)
 * @property {string} [search_field] - Поле для поиска
 * @property {string} [search_value] - Значение для поиска
 */
export interface GetTransactionsParams {
  user_cache?: boolean;
  limit?: number;
  offset?: number;
  sort_by?: string;
  sort_order?: string;
  start_date?: string;
  end_date?: string;
  search_field?: string;
  search_value?: string;
}

/**
 * API для работы с транзакциями.
 * Предоставляет методы для получения информации о транзакциях.
 *
 * @example
 * ```typescript
 * // Создание экземпляра API
 * const transactionsApi = new TransactionsApi('https://b2b-api.ggsel.com', 'your-token');
 *
 * // Получение списка транзакций
 * const transactions = await transactionsApi.getTransactions({
 *   limit: 10,
 *   offset: 0,
 *   sort_by: 'date',
 *   sort_order: 'desc'
 * });
 * ```
 */
export class TransactionsApi extends ApiBase {
  /**
   * Получает список транзакций с возможностью фильтрации и пагинации.
   * В зависимости от роли пользователя, метод может возвращать разные типы данных.
   *
   * @param {GetTransactionsParams} [params] - Параметры запроса
   * @returns {Promise<TransactionRead[] | TransactionReadObserver[]>} Промис со списком транзакций
   *
   * @example
   * ```typescript
   * // Получение последних 10 транзакций
   * const transactions = await transactionsApi.getTransactions({
   *   limit: 10,
   *   offset: 0,
   *   sort_by: 'date',
   *   sort_order: 'desc'
   * });
   *
   * // Поиск транзакций по аккаунту
   * const userTransactions = await transactionsApi.getTransactions({
   *   search_field: 'account',
   *   search_value: 'user123'
   * });
   * ```
   */
  public async getTransactions(
    params?: GetTransactionsParams
  ): Promise<TransactionRead[] | TransactionReadObserver[]> {
    return this.get<TransactionRead[] | TransactionReadObserver[]>('/transaction/view', params);
  }
}
