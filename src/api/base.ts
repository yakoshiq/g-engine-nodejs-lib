import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Token } from '../types';

export class ApiBase {
  protected readonly client: AxiosInstance;
  protected baseUrl: string;
  protected token: string | null = null;

  constructor(baseUrl: string = 'https://b2b-api.ggsel.com', token?: string) {
    this.baseUrl = baseUrl;
    if (token) {
      this.token = token;
    }

    this.client = axios.create({
      baseURL: `${this.baseUrl}/api/v2`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    // Добавляем перехватчик для автоматического добавления токена к запросам
    this.client.interceptors.request.use((config) => {
      if (this.token) {
        config.headers.Authorization = `Bearer ${this.token}`;
      }
      return config;
    });
  }

  /**
   * Устанавливает токен авторизации
   * @param token Токен авторизации
   */
  public setToken(token: string): void {
    this.token = token;
  }

  /**
   * Очищает токен авторизации
   */
  public clearToken(): void {
    this.token = null;
  }

  /**
   * Выполняет GET запрос
   * @param url URL запроса
   * @param params Параметры запроса
   * @param config Дополнительная конфигурация запроса
   * @returns Промис с результатом запроса
   */
  protected async get<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.get(url, {
      ...config,
      params,
    });
    return response.data;
  }

  /**
   * Выполняет POST запрос
   * @param url URL запроса
   * @param data Данные запроса
   * @param config Дополнительная конфигурация запроса
   * @returns Промис с результатом запроса
   */
  protected async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.post(url, data, config);
    return response.data;
  }

  /**
   * Выполняет PUT запрос
   * @param url URL запроса
   * @param data Данные запроса
   * @param config Дополнительная конфигурация запроса
   * @returns Промис с результатом запроса
   */
  protected async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.put(url, data, config);
    return response.data;
  }

  /**
   * Выполняет DELETE запрос
   * @param url URL запроса
   * @param config Дополнительная конфигурация запроса
   * @returns Промис с результатом запроса
   */
  protected async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.delete(url, config);
    return response.data;
  }
} 