import { ApiBase } from './base';
import { Token, UserAuth } from '../types';

export class AuthApi extends ApiBase {
  /**
   * Получение токена авторизации
   * @param credentials Учетные данные пользователя
   * @returns Промис с токеном авторизации
   */
  public async login(credentials: UserAuth): Promise<Token> {
    const token = await this.post<Token>('/auth/token', credentials);
    this.setToken(token.access_token);
    return token;
  }

  /**
   * Выход из системы (очистка токена)
   */
  public logout(): void {
    this.clearToken();
  }
} 