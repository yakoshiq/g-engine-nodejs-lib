/**
 * @fileoverview API для работы с аутентификацией в G-Engine.
 * @module api/auth
 */

import { ApiBase } from './base';
import { Token, UserAuth } from '../types';

/**
 * API для работы с аутентификацией.
 * Предоставляет методы для входа и выхода из системы.
 *
 * @example
 * ```typescript
 * // Создание экземпляра API
 * const authApi = new AuthApi('https://b2b-api.ggsel.com');
 *
 * // Авторизация
 * const token = await authApi.login({
 *   login: 'your-login',
 *   password: 'your-password'
 * });
 *
 * // Выход из системы
 * authApi.logout();
 * ```
 */
export class AuthApi extends ApiBase {
  /**
   * Ссылка на родительский клиент G-Engine.
   * @private
   */
  private parentClient?: { setToken: (token: string) => void };

  /**
   * Устанавливает ссылку на родительский клиент.
   * @param client - Родительский клиент G-Engine
   */
  public setParentClient(client: { setToken: (token: string) => void }): void {
    this.parentClient = client;
  }

  /**
   * Выполняет авторизацию пользователя и получает токен доступа.
   * После успешной авторизации токен автоматически устанавливается для всех последующих запросов.
   *
   * @param {UserAuth} credentials - Учетные данные пользователя (логин и пароль)
   * @returns {Promise<Token>} Промис с токеном авторизации
   *
   * @example
   * ```typescript
   * const token = await authApi.login({
   *   login: 'your-login',
   *   password: 'your-password'
   * });
   * console.log(`Токен: ${token.access_token}`);
   * ```
   */
  public async login(credentials: UserAuth): Promise<Token> {
    const token = await this.post<Token>('/auth/token', credentials);

    // Устанавливаем токен для текущего API модуля
    this.setToken(token.access_token);

    // Если есть родительский клиент, устанавливаем токен для всех API модулей
    if (this.parentClient) {
      this.parentClient.setToken(token.access_token);
    }

    return token;
  }

  /**
   * Выполняет выход из системы путем очистки токена авторизации.
   * После вызова этого метода все последующие запросы будут выполняться без авторизации.
   *
   * @returns {void}
   *
   * @example
   * ```typescript
   * authApi.logout();
   * ```
   */
  public logout(): void {
    this.clearToken();
  }
}
