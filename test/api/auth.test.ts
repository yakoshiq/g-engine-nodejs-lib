import MockAdapter from 'axios-mock-adapter';
import { AuthApi } from '../../src/api/auth';
import { Token } from '../../src/types';

describe('AuthApi', () => {
  let api: AuthApi;
  let mock: MockAdapter;
  const baseUrl = 'https://test-api.example.com';

  beforeEach(() => {
    api = new AuthApi(baseUrl);
    // @ts-ignore - получаем доступ к protected свойству для тестирования
    mock = new MockAdapter(api['client']);
  });

  afterEach(() => {
    mock.reset();
  });

  describe('login', () => {
    it('должен выполнять запрос на авторизацию и устанавливать токен', async () => {
      const credentials = {
        login: 'test-user',
        password: 'test-password',
      };

      const tokenResponse: Token = {
        access_token: 'test-access-token',
        token_type: 'Bearer',
      };

      mock.onPost('/auth/token', credentials).reply(200, tokenResponse);

      const result = await api.login(credentials);

      expect(result).toEqual(tokenResponse);

      // Проверяем, что токен был установлен
      mock.onGet('/test').reply(config => {
        expect(config.headers?.Authorization).toBe(`Bearer ${tokenResponse.access_token}`);
        return [200, {}];
      });

      // @ts-ignore - вызываем protected метод для тестирования
      await api['get']('/test');
    });

    it('должен устанавливать токен для родительского клиента', async () => {
      const credentials = {
        login: 'test-user',
        password: 'test-password',
      };

      const tokenResponse: Token = {
        access_token: 'test-access-token',
        token_type: 'Bearer',
      };

      mock.onPost('/auth/token', credentials).reply(200, tokenResponse);

      // Создаем мок родительского клиента
      const parentClient = {
        setToken: jest.fn(),
      };

      // Устанавливаем родительский клиент
      api.setParentClient(parentClient);

      await api.login(credentials);

      // Проверяем, что токен был установлен для родительского клиента
      expect(parentClient.setToken).toHaveBeenCalledWith(tokenResponse.access_token);
    });

    it('должен выбрасывать ошибку при неверных учетных данных', async () => {
      const credentials = {
        login: 'wrong-user',
        password: 'wrong-password',
      };

      mock.onPost('/auth/token', credentials).reply(401, {
        error: 'invalid_credentials',
        error_description: 'Неверный логин или пароль',
      });

      await expect(api.login(credentials)).rejects.toThrow();
    });
  });

  describe('logout', () => {
    it('должен очищать токен авторизации', async () => {
      // Сначала устанавливаем токен
      const credentials = {
        login: 'test-user',
        password: 'test-password',
      };

      const tokenResponse: Token = {
        access_token: 'test-access-token',
        token_type: 'Bearer',
      };

      mock.onPost('/auth/token', credentials).reply(200, tokenResponse);

      await api.login(credentials);

      // Проверяем, что токен установлен
      mock.onGet('/test').reply(config => {
        expect(config.headers?.Authorization).toBe(`Bearer ${tokenResponse.access_token}`);
        return [200, {}];
      });

      // @ts-ignore - вызываем protected метод для тестирования
      await api['get']('/test');

      // Выполняем выход
      api.logout();

      // Проверяем, что токен очищен
      mock.onGet('/test').reply(config => {
        expect(config.headers?.Authorization).toBeUndefined();
        return [200, {}];
      });

      // @ts-ignore - вызываем protected метод для тестирования
      await api['get']('/test');
    });
  });
});
