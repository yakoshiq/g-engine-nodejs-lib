import MockAdapter from 'axios-mock-adapter';
import { PaymentsApi } from '../../src/api/payments';
import {
  VerifyPaymentCreate,
  ExecutePaymentParams,
  PaymentResponse,
  ResponseBase,
  StatusCode,
} from '../../src/types';

describe('PaymentsApi', () => {
  let api: PaymentsApi;
  let mock: MockAdapter;
  const baseUrl = 'https://test-api.example.com';
  const testToken = 'test-token';

  beforeEach(() => {
    api = new PaymentsApi(baseUrl, testToken);
    // @ts-ignore - получаем доступ к protected свойству для тестирования
    mock = new MockAdapter(api['client']);
  });

  afterEach(() => {
    mock.reset();
  });

  describe('verifyPayment', () => {
    it('должен верифицировать платеж', async () => {
      const paymentData: VerifyPaymentCreate = {
        transaction_id: 'test-tx-123',
        service_id: 1,
        account: 'test-account',
        amount: 100,
        currency: 'RUB',
      };

      const paymentResponse: PaymentResponse = {
        transaction_id: 'test-tx-123',
        amount_rub: '100',
        amount_usd: '1.5',
        account: 'test-account',
        date: '2023-01-01T12:00:00Z',
        status: 'Верифицирован',
        status_code: StatusCode.REQUEST_ACCEPTED,
      };

      mock.onPost('/payment/verify', paymentData).reply(200, paymentResponse);

      const result = await api.verifyPayment(paymentData);

      expect(result).toEqual(paymentResponse);
    });

    it('должен обрабатывать ошибку при верификации платежа', async () => {
      const paymentData: VerifyPaymentCreate = {
        transaction_id: 'test-tx-123',
        service_id: 999, // Несуществующий сервис
        account: 'test-account',
        amount: 100,
        currency: 'RUB',
      };

      mock.onPost('/payment/verify', paymentData).reply(400, {
        error: 'invalid_service',
        error_description: 'Сервис не найден',
      });

      await expect(api.verifyPayment(paymentData)).rejects.toThrow();
    });
  });

  describe('executePayment', () => {
    it('должен выполнять платеж', async () => {
      const params: ExecutePaymentParams = {
        transaction_id: 'test-tx-123',
      };

      const paymentResponse: ResponseBase<PaymentResponse> = {
        success: true,
        message: 'Платеж успешно выполнен',
        data: {
          transaction_id: 'test-tx-123',
          amount_rub: '100',
          amount_usd: '1.5',
          account: 'test-account',
          date: '2023-01-01T12:00:00Z',
          status: 'Успешно',
          status_code: StatusCode.PAYMENT_SUCCESS,
        },
      };

      mock.onPost('/payment/execute', params).reply(200, paymentResponse);

      const result = await api.executePayment(params);

      expect(result).toEqual(paymentResponse);
      expect(result.success).toBe(true);
      expect(result.data?.status_code).toBe(StatusCode.PAYMENT_SUCCESS);
    });

    it('должен обрабатывать ошибку при выполнении платежа', async () => {
      const params: ExecutePaymentParams = {
        transaction_id: 'test-tx-456',
      };

      const errorResponse: ResponseBase<PaymentResponse> = {
        success: false,
        message: 'Недостаточно средств',
        data: {
          transaction_id: 'test-tx-456',
          amount_rub: '1000',
          amount_usd: '15',
          account: 'test-account',
          date: '2023-01-01T12:00:00Z',
          status: 'Ошибка',
          status_code: StatusCode.INSUFFICIENT_FUNDS,
        },
      };

      mock.onPost('/payment/execute', params).reply(200, errorResponse);

      const result = await api.executePayment(params);

      expect(result).toEqual(errorResponse);
      expect(result.success).toBe(false);
      expect(result.data?.status_code).toBe(StatusCode.INSUFFICIENT_FUNDS);
    });
  });

  describe('getPaymentStatus', () => {
    it('должен получать статус платежа', async () => {
      const transactionId = 'test-tx-123';

      const paymentResponse: PaymentResponse = {
        transaction_id: 'test-tx-123',
        amount_rub: '100',
        amount_usd: '1.5',
        account: 'test-account',
        date: '2023-01-01T12:00:00Z',
        status: 'Успешно',
        status_code: StatusCode.PAYMENT_SUCCESS,
      };

      mock
        .onGet('/payment/status', { params: { transaction_id: transactionId } })
        .reply(200, paymentResponse);

      const result = await api.getPaymentStatus(transactionId);

      expect(result).toEqual(paymentResponse);
      expect(result.status_code).toBe(StatusCode.PAYMENT_SUCCESS);
    });

    it('должен обрабатывать ошибку при получении статуса платежа', async () => {
      const transactionId = 'non-existent-tx';

      mock.onGet('/payment/status', { params: { transaction_id: transactionId } }).reply(404, {
        error: 'transaction_not_found',
        error_description: 'Транзакция не найдена',
      });

      await expect(api.getPaymentStatus(transactionId)).rejects.toThrow();
    });
  });
});
