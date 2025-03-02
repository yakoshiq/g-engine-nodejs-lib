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

/**
 * Основной класс клиента G-Engine API
 */
export class GEngineClient {
  /**
   * API для работы с аутентификацией
   */
  public readonly auth: AuthApi;

  /**
   * API для работы с пользователями
   */
  public readonly users: UsersApi;

  /**
   * API для работы с платежами
   */
  public readonly payments: PaymentsApi;

  /**
   * API для работы с транзакциями
   */
  public readonly transactions: TransactionsApi;

  /**
   * API для работы с валютами
   */
  public readonly currencies: CurrenciesApi;

  /**
   * Создает новый экземпляр клиента G-Engine API
   * @param baseUrl Базовый URL API (по умолчанию https://b2b-api.ggsel.com)
   * @param token Токен авторизации (опционально)
   */
  constructor(baseUrl: string = 'https://b2b-api.ggsel.com', token?: string) {
    this.auth = new AuthApi(baseUrl, token);
    this.users = new UsersApi(baseUrl, token);
    this.payments = new PaymentsApi(baseUrl, token);
    this.transactions = new TransactionsApi(baseUrl, token);
    this.currencies = new CurrenciesApi(baseUrl, token);
  }

  /**
   * Устанавливает токен авторизации для всех API
   * @param token Токен авторизации
   */
  public setToken(token: string): void {
    this.auth.setToken(token);
    this.users.setToken(token);
    this.payments.setToken(token);
    this.transactions.setToken(token);
    this.currencies.setToken(token);
  }

  /**
   * Очищает токен авторизации для всех API
   */
  public clearToken(): void {
    this.auth.clearToken();
    this.users.clearToken();
    this.payments.clearToken();
    this.transactions.clearToken();
    this.currencies.clearToken();
  }
} 