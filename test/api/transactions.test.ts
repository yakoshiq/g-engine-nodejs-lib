import MockAdapter from 'axios-mock-adapter';
import { TransactionsApi, GetTransactionsParams } from '../../src/api/transactions';
import { TransactionRead, TransactionReadObserver, StatusCode } from '../../src/types';

describe('TransactionsApi', () => {
  let api: TransactionsApi;
  let mock: MockAdapter;
  const baseUrl = 'https://test-api.example.com';
  const testToken = 'test-token';

  beforeEach(() => {
    api = new TransactionsApi(baseUrl, testToken);
    // @ts-ignore - получаем доступ к protected свойству для тестирования
    mock = new MockAdapter(api['client']);
  });

  afterEach(() => {
    mock.reset();
  });

  describe('getTransactions', () => {
    it('должен получать список транзакций для обычного пользователя без параметров', async () => {
      const transactionsResponse: TransactionRead[] = [
        {
          transaction_id: 'tx-123',
          date: '2023-01-01T12:00:00Z',
          account: 'user123',
          amount: 100,
          amount_usd: 1.5,
          status: 'Успешно',
          status_code: StatusCode.PAYMENT_SUCCESS,
        },
        {
          transaction_id: 'tx-456',
          date: '2023-01-02T14:30:00Z',
          account: 'user123',
          amount: 200,
          amount_usd: 3,
          status: 'Успешно',
          status_code: StatusCode.PAYMENT_SUCCESS,
        },
      ];

      mock.onGet('/transaction/view').reply(200, transactionsResponse);

      const result = await api.getTransactions();

      expect(result).toEqual(transactionsResponse);
    });

    it('должен получать список транзакций для пользователя с ролью Observer без параметров', async () => {
      const transactionsResponse: TransactionReadObserver[] = [
        {
          id: 1,
          code: 'tx-123',
          date: '2023-01-01T12:00:00Z',
          steam_login: 'user123',
          amount: 100,
          amount_usd: 1.5,
          cashback: 5,
          status: 'Успешно',
          status_code: StatusCode.PAYMENT_SUCCESS,
          user: {
            id: 101,
            login: 'user123',
            name: 'User 123',
            created_at: '2022-01-01T00:00:00Z',
            balance: 1000,
            cashback: 50,
            is_active: true,
          },
        },
        {
          id: 2,
          code: 'tx-456',
          date: '2023-01-02T14:30:00Z',
          steam_login: 'user456',
          amount: 200,
          amount_usd: 3,
          cashback: 10,
          status: 'Успешно',
          status_code: StatusCode.PAYMENT_SUCCESS,
          user: {
            id: 102,
            login: 'user456',
            name: 'User 456',
            created_at: '2022-02-01T00:00:00Z',
            balance: 2000,
            cashback: 100,
            is_active: true,
          },
        },
      ];

      mock.onGet('/transaction/view').reply(200, transactionsResponse);

      const result = await api.getTransactions();

      expect(result).toEqual(transactionsResponse);
    });

    it('должен получать список транзакций с параметрами', async () => {
      const params: GetTransactionsParams = {
        limit: 10,
        offset: 0,
        sort_by: 'date',
        sort_order: 'desc',
        search_field: 'account',
        search_value: 'user123',
      };

      const transactionsResponse: TransactionRead[] = [
        {
          transaction_id: 'tx-123',
          date: '2023-01-01T12:00:00Z',
          account: 'user123',
          amount: 100,
          amount_usd: 1.5,
          status: 'Успешно',
          status_code: StatusCode.PAYMENT_SUCCESS,
        },
      ];

      mock.onGet('/transaction/view', { params }).reply(config => {
        expect(config.params).toEqual(params);
        return [200, transactionsResponse];
      });

      const result = await api.getTransactions(params);

      expect(result).toEqual(transactionsResponse);
    });

    it('должен корректно обрабатывать ошибку при получении списка транзакций', async () => {
      mock.onGet('/transaction/view').reply(500, {
        error: 'internal_server_error',
        error_description: 'Внутренняя ошибка сервера',
      });

      await expect(api.getTransactions()).rejects.toThrow();
    });
  });
});
