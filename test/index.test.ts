import { GEngineClient } from '../src';
import { AuthApi } from '../src/api/auth';
import { UsersApi } from '../src/api/users';
import { PaymentsApi } from '../src/api/payments';
import { TransactionsApi } from '../src/api/transactions';
import { CurrenciesApi } from '../src/api/currencies';

describe('GEngineClient', () => {
  const baseUrl = 'https://test-api.example.com';
  const testToken = 'test-token';

  describe('constructor', () => {
    it('должен создавать экземпляр с API модулями без токена', () => {
      const client = new GEngineClient(baseUrl);

      expect(client.auth).toBeInstanceOf(AuthApi);
      expect(client.users).toBeInstanceOf(UsersApi);
      expect(client.payments).toBeInstanceOf(PaymentsApi);
      expect(client.transactions).toBeInstanceOf(TransactionsApi);
      expect(client.currencies).toBeInstanceOf(CurrenciesApi);
    });

    it('должен создавать экземпляр с API модулями с токеном', () => {
      const client = new GEngineClient(baseUrl, testToken);

      expect(client.auth).toBeInstanceOf(AuthApi);
      expect(client.users).toBeInstanceOf(UsersApi);
      expect(client.payments).toBeInstanceOf(PaymentsApi);
      expect(client.transactions).toBeInstanceOf(TransactionsApi);
      expect(client.currencies).toBeInstanceOf(CurrenciesApi);

      // Проверяем, что токен был установлен для всех API модулей
      // Для этого нам нужно сделать тестовый запрос и проверить, что токен добавлен
      // Но это уже проверяется в тестах для каждого API модуля
    });

    it('должен использовать URL по умолчанию, если он не указан', () => {
      const client = new GEngineClient();

      // @ts-ignore - получаем доступ к protected свойству для тестирования
      expect(client.auth['baseUrl']).toBe('https://b2b-api.ggsel.com');
    });
  });

  describe('setToken', () => {
    it('должен устанавливать токен для всех API модулей', () => {
      const client = new GEngineClient(baseUrl);
      const newToken = 'new-test-token';

      // Создаем шпионов для метода setToken каждого API модуля
      const authSpy = jest.spyOn(client.auth, 'setToken');
      const usersSpy = jest.spyOn(client.users, 'setToken');
      const paymentsSpy = jest.spyOn(client.payments, 'setToken');
      const transactionsSpy = jest.spyOn(client.transactions, 'setToken');
      const currenciesSpy = jest.spyOn(client.currencies, 'setToken');

      client.setToken(newToken);

      // Проверяем, что метод setToken был вызван для каждого API модуля с правильным токеном
      expect(authSpy).toHaveBeenCalledWith(newToken);
      expect(usersSpy).toHaveBeenCalledWith(newToken);
      expect(paymentsSpy).toHaveBeenCalledWith(newToken);
      expect(transactionsSpy).toHaveBeenCalledWith(newToken);
      expect(currenciesSpy).toHaveBeenCalledWith(newToken);
    });
  });

  describe('clearToken', () => {
    it('должен очищать токен для всех API модулей', () => {
      const client = new GEngineClient(baseUrl, testToken);

      // Создаем шпионов для метода clearToken каждого API модуля
      const authSpy = jest.spyOn(client.auth, 'clearToken');
      const usersSpy = jest.spyOn(client.users, 'clearToken');
      const paymentsSpy = jest.spyOn(client.payments, 'clearToken');
      const transactionsSpy = jest.spyOn(client.transactions, 'clearToken');
      const currenciesSpy = jest.spyOn(client.currencies, 'clearToken');

      client.clearToken();

      // Проверяем, что метод clearToken был вызван для каждого API модуля
      expect(authSpy).toHaveBeenCalled();
      expect(usersSpy).toHaveBeenCalled();
      expect(paymentsSpy).toHaveBeenCalled();
      expect(transactionsSpy).toHaveBeenCalled();
      expect(currenciesSpy).toHaveBeenCalled();
    });
  });
});
