/**
 * @fileoverview API для работы с пользователями в G-Engine.
 * @module api/users
 */

import { ApiBase } from './base';
import { UserMe, UserBalance, UserBalanceObserver, UserReadObserver, UserRole } from '../types';

/**
 * Параметры для получения списка пользователей.
 * 
 * @interface GetUsersParams
 * @property {number} [limit] - Максимальное количество пользователей в ответе
 * @property {number} [offset] - Смещение для пагинации
 * @property {string} [sort_by] - Поле для сортировки
 * @property {string} [sort_order] - Порядок сортировки ('asc' или 'desc')
 * @property {string} [start_date] - Начальная дата для фильтрации (в формате YYYY-MM-DD)
 * @property {string} [end_date] - Конечная дата для фильтрации (в формате YYYY-MM-DD)
 * @property {string} [search_field] - Поле для поиска
 * @property {string} [search_value] - Значение для поиска
 * @property {UserRole} [role_name] - Роль пользователя для фильтрации
 */
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

/**
 * API для работы с пользователями.
 * Предоставляет методы для получения информации о пользователях и их балансе.
 * 
 * @example
 * ```typescript
 * // Создание экземпляра API
 * const usersApi = new UsersApi('https://b2b-api.ggsel.com', 'your-token');
 * 
 * // Получение данных текущего пользователя
 * const currentUser = await usersApi.getCurrentUser();
 * console.log(`Текущий пользователь: ${currentUser.name}`);
 * ```
 */
export class UsersApi extends ApiBase {
  /**
   * Получает данные текущего авторизованного пользователя.
   * 
   * @returns {Promise<UserMe>} Промис с данными текущего пользователя
   * 
   * @example
   * ```typescript
   * const currentUser = await usersApi.getCurrentUser();
   * console.log(`Логин: ${currentUser.login}`);
   * console.log(`Имя: ${currentUser.name}`);
   * console.log(`Баланс: ${currentUser.balance}`);
   * ```
   */
  public async getCurrentUser(): Promise<UserMe> {
    return this.get<UserMe>('/user/me');
  }

  /**
   * Получает информацию о балансе текущего пользователя.
   * В зависимости от роли пользователя, метод может возвращать разные типы данных.
   * 
   * @returns {Promise<UserBalance | UserBalanceObserver[]>} Промис с балансом пользователя
   * 
   * @example
   * ```typescript
   * const balance = await usersApi.getUserBalance();
   * 
   * if (Array.isArray(balance)) {
   *   // Для пользователя с ролью Observer
   *   balance.forEach(item => {
   *     console.log(`Пользователь ${item.login}: ${item.balance} ${item.currency}`);
   *   });
   * } else {
   *   // Для обычного пользователя
   *   console.log(`Баланс: ${balance.balance} ${balance.currency}`);
   *   console.log(`Кэшбэк: ${balance.cashback} ${balance.currency}`);
   * }
   * ```
   */
  public async getUserBalance(): Promise<UserBalance | UserBalanceObserver[]> {
    return this.get<UserBalance | UserBalanceObserver[]>('/user/balance');
  }

  /**
   * Получает список пользователей с возможностью фильтрации и пагинации.
   * Этот метод доступен только для пользователей с ролью Observer.
   * 
   * @param {GetUsersParams} [params] - Параметры запроса
   * @returns {Promise<UserReadObserver[]>} Промис со списком пользователей
   * 
   * @example
   * ```typescript
   * // Получение списка пользователей с ролью User
   * const users = await usersApi.getUsers({
   *   limit: 10,
   *   offset: 0,
   *   role_name: UserRole.User
   * });
   * 
   * // Поиск пользователей по логину
   * const foundUsers = await usersApi.getUsers({
   *   search_field: 'login',
   *   search_value: 'user123'
   * });
   * ```
   */
  public async getUsers(params?: GetUsersParams): Promise<UserReadObserver[]> {
    return this.get<UserReadObserver[]>('/user', params);
  }
} 