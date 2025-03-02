import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ApiBase } from '../../src/api/base';

// Создаем класс-наследник для тестирования, так как ApiBase - абстрактный класс
class TestApi extends ApiBase {
  public async testGet<T>(url: string, params?: any): Promise<T> {
    return this.get<T>(url, params);
  }

  public async testPost<T>(url: string, data?: any): Promise<T> {
    return this.post<T>(url, data);
  }

  public async testPut<T>(url: string, data?: any): Promise<T> {
    return this.put<T>(url, data);
  }

  public async testDelete<T>(url: string): Promise<T> {
    return this.delete<T>(url);
  }

  // Метод для доступа к protected свойству client для тестирования
  public getClient() {
    return this.client;
  }
}

describe('ApiBase', () => {
  let api: TestApi;
  let mock: MockAdapter;
  const baseUrl = 'https://test-api.example.com';
  const testToken = 'test-token';

  beforeEach(() => {
    api = new TestApi(baseUrl);
    mock = new MockAdapter(api.getClient());
  });

  afterEach(() => {
    mock.restore(); // Используем restore вместо reset для полной очистки
  });

  describe('constructor', () => {
    it('должен создать экземпляр с указанным baseUrl', () => {
      expect(api.getClient().defaults.baseURL).toBe(`${baseUrl}/api/v2`);
    });

    it('должен создать экземпляр с токеном, если он указан', async () => {
      const apiWithToken = new TestApi(baseUrl, testToken);
      const mockWithToken = new MockAdapter(apiWithToken.getClient());

      // Проверяем, что токен добавляется к запросам
      mockWithToken.onGet('/test').reply(config => {
        expect(config.headers?.Authorization).toBe(`Bearer ${testToken}`);
        return [200, {}];
      });

      await apiWithToken.testGet('/test');
      mockWithToken.restore();
    });
  });

  describe('setToken', () => {
    it('должен устанавливать токен авторизации', async () => {
      api.setToken(testToken);

      mock.onGet('/test').reply(config => {
        expect(config.headers?.Authorization).toBe(`Bearer ${testToken}`);
        return [200, {}];
      });

      await api.testGet('/test');
    });
  });

  describe('clearToken', () => {
    it('должен очищать токен авторизации', async () => {
      api.setToken(testToken);
      api.clearToken();

      mock.onGet('/test').reply(config => {
        expect(config.headers?.Authorization).toBeUndefined();
        return [200, {}];
      });

      await api.testGet('/test');
    });
  });

  describe('HTTP методы', () => {
    const testUrl = '/test';
    const testData = { key: 'value' };
    const testResponse = { result: 'success' };

    it('get должен выполнять GET запрос', async () => {
      mock.onGet(testUrl).reply(200, testResponse);

      const result = await api.testGet(testUrl);

      expect(result).toEqual(testResponse);
    });

    it('get должен передавать параметры запроса', async () => {
      mock.onGet(testUrl).reply(config => {
        expect(config.params).toEqual(testData);
        return [200, testResponse];
      });

      const result = await api.testGet(testUrl, testData);

      expect(result).toEqual(testResponse);
    });

    it('post должен выполнять POST запрос', async () => {
      mock.onPost(testUrl, testData).reply(200, testResponse);

      const result = await api.testPost(testUrl, testData);

      expect(result).toEqual(testResponse);
    });

    it('put должен выполнять PUT запрос', async () => {
      mock.onPut(testUrl, testData).reply(200, testResponse);

      const result = await api.testPut(testUrl, testData);

      expect(result).toEqual(testResponse);
    });

    it('delete должен выполнять DELETE запрос', async () => {
      mock.onDelete(testUrl).reply(200, testResponse);

      const result = await api.testDelete(testUrl);

      expect(result).toEqual(testResponse);
    });
  });
});
