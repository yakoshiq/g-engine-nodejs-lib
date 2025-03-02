import MockAdapter from 'axios-mock-adapter';
import { UsersApi, GetUsersParams } from '../../src/api/users';
import {
  UserRole,
  UserMe,
  UserBalance,
  UserBalanceObserver,
  UserReadObserver,
} from '../../src/types';

describe('UsersApi', () => {
  let api: UsersApi;
  let mock: MockAdapter;
  const baseUrl = 'https://test-api.example.com';
  const testToken = 'test-token';

  beforeEach(() => {
    api = new UsersApi(baseUrl, testToken);
    // @ts-ignore - получаем доступ к protected свойству для тестирования
    mock = new MockAdapter(api['client']);
  });

  afterEach(() => {
    mock.reset();
  });

  describe('getCurrentUser', () => {
    it('должен получать данные текущего пользователя', async () => {
      const userResponse: UserMe = {
        login: 'test-user',
        name: 'Test User',
        balance: 1000,
        role: UserRole.User,
        is_active: true,
        is_beta: false,
        currency_version: 'USD',
      };

      mock.onGet('/user/me').reply(200, userResponse);

      const result = await api.getCurrentUser();

      expect(result).toEqual(userResponse);
    });

    it('должен выбрасывать ошибку при неудачном запросе', async () => {
      mock.onGet('/user/me').reply(401, {
        error: 'unauthorized',
        error_description: 'Требуется авторизация',
      });

      await expect(api.getCurrentUser()).rejects.toThrow();
    });
  });

  describe('getUserBalance', () => {
    it('должен получать баланс обычного пользователя', async () => {
      const balanceResponse: UserBalance = {
        currency: 'USD',
        balance: 1000,
        cashback: 50,
      };

      mock.onGet('/user/balance').reply(200, balanceResponse);

      const result = await api.getUserBalance();

      expect(result).toEqual(balanceResponse);
    });

    it('должен получать баланс пользователя с ролью Observer', async () => {
      const balanceResponse: UserBalanceObserver[] = [
        {
          id: 1,
          login: 'user1',
          currency: 'USD',
          balance: 1000,
          cashback: 50,
        },
        {
          id: 2,
          login: 'user2',
          currency: 'USD',
          balance: 2000,
          cashback: 100,
        },
      ];

      mock.onGet('/user/balance').reply(200, balanceResponse);

      const result = await api.getUserBalance();

      expect(result).toEqual(balanceResponse);
    });
  });

  describe('getUsers', () => {
    it('должен получать список пользователей без параметров', async () => {
      const usersResponse: UserReadObserver[] = [
        {
          id: 1,
          login: 'user1',
          name: 'User 1',
          role: {
            id: 1,
            name: 'User',
            level: 1,
          },
          balance: 1000,
          cashback: 50,
          is_active: true,
        },
        {
          id: 2,
          login: 'user2',
          name: 'User 2',
          role: {
            id: 1,
            name: 'User',
            level: 1,
          },
          balance: 2000,
          cashback: 100,
          is_active: true,
        },
      ];

      mock.onGet('/user').reply(200, usersResponse);

      const result = await api.getUsers();

      expect(result).toEqual(usersResponse);
    });

    it('должен получать список пользователей с параметрами', async () => {
      const params: GetUsersParams = {
        limit: 10,
        offset: 0,
        role_name: UserRole.User,
        search_field: 'login',
        search_value: 'user',
      };

      const usersResponse: UserReadObserver[] = [
        {
          id: 1,
          login: 'user1',
          name: 'User 1',
          role: {
            id: 1,
            name: 'User',
            level: 1,
          },
          balance: 1000,
          cashback: 50,
          is_active: true,
        },
      ];

      mock.onGet('/user', { params }).reply(config => {
        expect(config.params).toEqual(params);
        return [200, usersResponse];
      });

      const result = await api.getUsers(params);

      expect(result).toEqual(usersResponse);
    });
  });
});
