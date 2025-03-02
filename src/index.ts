/**
 * @fileoverview Основной модуль библиотеки G-Engine API.
 * @module g-engine-api
 */

import { AuthApi } from './api/auth';
import { UsersApi } from './api/users';
import { PaymentsApi } from './api/payments';
import { TransactionsApi } from './api/transactions';
import { CurrenciesApi } from './api/currencies';

// Экспортируем все типы
export * from './types';
export * from './api/auth';
export * from './api/users';
export * from './api/payments';
export * from './api/transactions';
export * from './api/currencies';
// Экспортируем утилиты
export * from './utils';

/**
 * Основной класс клиента G-Engine API.
 * Предоставляет доступ ко всем API модулям и управление авторизацией.
 * 
 * @example
 * ```typescript
 * // Создание клиента без токена
 * const client = new GEngineClient();
 * 
 * // Создание клиента с токеном
 * const client = new GEngineClient('https://b2b-api.ggsel.com', 'your-token');
 * 
 * // Авторизация
 * const token = await client.auth.login({
 *   login: 'your-login',
 *   password: 'your-password'
 * });
 * 
 * // Установка токена
 * client.setToken(token.access_token);
 * ```
 */
export class GEngineClient {
  /**
   * API для работы с аутентификацией.
   * Предоставляет методы для входа и выхода из системы.
   */
  public readonly auth: AuthApi;

  /**
   * API для работы с пользователями.
   * Предоставляет методы для получения информации о пользователях и их балансе.
   */
  public readonly users: UsersApi;

  /**
   * API для работы с платежами.
   * Предоставляет методы для создания, верификации и выполнения платежей.
   */
  public readonly payments: PaymentsApi;

  /**
   * API для работы с транзакциями.
   * Предоставляет методы для получения информации о транзакциях.
   */
  public readonly transactions: TransactionsApi;

  /**
   * API для работы с валютами.
   * Предоставляет методы для получения курсов валют.
   */
  public readonly currencies: CurrenciesApi;

  /**
   * Создает новый экземпляр клиента G-Engine API.
   * 
   * @param {string} baseUrl - Базовый URL API (по умолчанию https://b2b-api.ggsel.com)
   * @param {string} [token] - Токен авторизации (опционально)
   */
  constructor(baseUrl: string = 'https://b2b-api.ggsel.com', token?: string) {
    this.auth = new AuthApi(baseUrl, token);
    this.users = new UsersApi(baseUrl, token);
    this.payments = new PaymentsApi(baseUrl, token);
    this.transactions = new TransactionsApi(baseUrl, token);
    this.currencies = new CurrenciesApi(baseUrl, token);
  }

  /**
   * Устанавливает токен авторизации для всех API модулей.
   * Используется после успешной авторизации для последующих запросов.
   * 
   * @param {string} token - Токен авторизации
   * @returns {void}
   */
  public setToken(token: string): void {
    this.auth.setToken(token);
    this.users.setToken(token);
    this.payments.setToken(token);
    this.transactions.setToken(token);
    this.currencies.setToken(token);
  }

  /**
   * Очищает токен авторизации для всех API модулей.
   * Используется при выходе из системы.
   * 
   * @returns {void}
   */
  public clearToken(): void {
    this.auth.clearToken();
    this.users.clearToken();
    this.payments.clearToken();
    this.transactions.clearToken();
    this.currencies.clearToken();
  }
} 