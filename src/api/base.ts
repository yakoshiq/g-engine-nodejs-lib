/**
 * @fileoverview Базовый класс для всех API модулей G-Engine.
 * @module api/base
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * Базовый класс для всех API модулей.
 * Предоставляет общую функциональность для работы с HTTP запросами и авторизацией.
 */
export class ApiBase {
  /**
   * HTTP клиент для выполнения запросов.
   * @protected
   */
  protected readonly client: AxiosInstance;

  /**
   * Базовый URL API.
   * @protected
   */
  protected baseUrl: string;

  /**
   * Токен авторизации.
   * @protected
   */
  protected token: string | null = null;

  /**
   * Создает новый экземпляр базового API.
   *
   * @param {string} baseUrl - Базовый URL API (по умолчанию https://b2b-api.ggsel.com)
   * @param {string} [token] - Токен авторизации (опционально)
   */
  constructor(baseUrl: string = 'https://b2b-api.ggsel.com', token?: string) {
    this.baseUrl = baseUrl;
    if (token) {
      this.token = token;
    }

    this.client = axios.create({
      baseURL: `${this.baseUrl}/api/v2`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    // Добавляем перехватчик для автоматического добавления токена к запросам
    this.client.interceptors.request.use(config => {
      if (this.token) {
        config.headers.Authorization = `Bearer ${this.token}`;
      }
      return config;
    });
  }

  /**
   * Устанавливает токен авторизации для API.
   * Этот токен будет автоматически добавляться ко всем запросам.
   *
   * @param {string} token - Токен авторизации
   * @returns {void}
   */
  public setToken(token: string): void {
    this.token = token;
  }

  /**
   * Очищает токен авторизации.
   * После вызова этого метода запросы будут выполняться без авторизации.
   *
   * @returns {void}
   */
  public clearToken(): void {
    this.token = null;
  }

  /**
   * Выполняет GET запрос к API.
   *
   * @template T - Тип возвращаемых данных
   * @param {string} url - URL запроса (относительно базового URL API)
   * @param {any} [params] - Параметры запроса (query parameters)
   * @param {AxiosRequestConfig} [config] - Дополнительная конфигурация запроса
   * @returns {Promise<T>} Промис с результатом запроса
   * @protected
   */
  protected async get<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.get(url, {
      ...config,
      params,
    });
    return response.data;
  }

  /**
   * Выполняет POST запрос к API.
   *
   * @template T - Тип возвращаемых данных
   * @param {string} url - URL запроса (относительно базового URL API)
   * @param {any} [data] - Данные запроса (тело запроса)
   * @param {AxiosRequestConfig} [config] - Дополнительная конфигурация запроса
   * @returns {Promise<T>} Промис с результатом запроса
   * @protected
   */
  protected async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.post(url, data, config);
    return response.data;
  }

  /**
   * Выполняет PUT запрос к API.
   *
   * @template T - Тип возвращаемых данных
   * @param {string} url - URL запроса (относительно базового URL API)
   * @param {any} [data] - Данные запроса (тело запроса)
   * @param {AxiosRequestConfig} [config] - Дополнительная конфигурация запроса
   * @returns {Promise<T>} Промис с результатом запроса
   * @protected
   */
  protected async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.put(url, data, config);
    return response.data;
  }

  /**
   * Выполняет DELETE запрос к API.
   *
   * @template T - Тип возвращаемых данных
   * @param {string} url - URL запроса (относительно базового URL API)
   * @param {AxiosRequestConfig} [config] - Дополнительная конфигурация запроса
   * @returns {Promise<T>} Промис с результатом запроса
   * @protected
   */
  protected async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.delete(url, config);
    return response.data;
  }
}
