import { ApiBase } from './base';
import { TransactionRead, TransactionReadObserver } from '../types';

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

export class TransactionsApi extends ApiBase {
  /**
   * Получение списка транзакций
   * @param params Параметры запроса
   * @returns Промис со списком транзакций
   */
  public async getTransactions(params?: GetTransactionsParams): Promise<TransactionRead[] | TransactionReadObserver[]> {
    return this.get<TransactionRead[] | TransactionReadObserver[]>('/transaction/view', params);
  }
} 