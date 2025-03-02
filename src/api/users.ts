import { ApiBase } from './base';
import { UserMe, UserBalance, UserBalanceObserver, UserReadObserver, UserRole } from '../types';

export interface GetUsersParams {
  limit?: number;
  offset?: number;
  sort_by?: string;
  sort_order?: string;
  start_date?: string;
  end_date?: string;
  search_field?: string;
  search_value?: string;
  role_name?: UserRole;
}

export class UsersApi extends ApiBase {
  /**
   * Получение данных текущего пользователя
   * @returns Промис с данными текущего пользователя
   */
  public async getCurrentUser(): Promise<UserMe> {
    return this.get<UserMe>('/user/me');
  }

  /**
   * Получение баланса текущего пользователя
   * @returns Промис с балансом пользователя
   */
  public async getUserBalance(): Promise<UserBalance | UserBalanceObserver[]> {
    return this.get<UserBalance | UserBalanceObserver[]>('/user/balance');
  }

  /**
   * Получение списка пользователей (только для Observer)
   * @param params Параметры запроса
   * @returns Промис со списком пользователей
   */
  public async getUsers(params?: GetUsersParams): Promise<UserReadObserver[]> {
    return this.get<UserReadObserver[]>('/user', params);
  }
} 