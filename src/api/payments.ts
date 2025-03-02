/**
 * @fileoverview API для работы с платежами в G-Engine.
 * @module api/payments
 */

import { ApiBase } from './base';
import { 
  VerifyPaymentCreate, 
  ExecutePaymentParams, 
  PaymentResponse, 
  ResponseBase 
} from '../types';

/**
 * API для работы с платежами.
 * Предоставляет методы для создания, верификации и выполнения платежей,
 * а также для получения информации о статусе платежей.
 * 
 * @example
 * ```typescript
 * // Создание экземпляра API
 * const paymentsApi = new PaymentsApi('https://b2b-api.ggsel.com', 'your-token');
 * 
 * // Генерация идентификатора транзакции
 * const transactionId = generateTransactionId();
 * 
 * // Создание и верификация платежа
 * const verifyResult = await paymentsApi.verifyPayment({
 *   transaction_id: transactionId,
 *   service_id: 1,
 *   account: 'user-account',
 *   amount: 100,
 *   currency: 'RUB'
 * });
 * ```
 */
export class PaymentsApi extends ApiBase {
  /**
   * Создает и верифицирует платеж.
   * Этот метод выполняет первый шаг в процессе создания платежа - верификацию данных.
   * 
   * @param {VerifyPaymentCreate} paymentData - Данные платежа для верификации
   * @returns {Promise<PaymentResponse>} Промис с результатом верификации платежа
   * 
   * @example
   * ```typescript
   * const verifyResult = await paymentsApi.verifyPayment({
   *   transaction_id: generateTransactionId(),
   *   service_id: 1,
   *   account: 'user-account',
   *   amount: 100,
   *   currency: 'RUB'
   * });
   * ```
   */
  public async verifyPayment(paymentData: VerifyPaymentCreate): Promise<PaymentResponse> {
    return this.post<PaymentResponse>('/payment/verify', paymentData);
  }

  /**
   * Выполняет платеж на основе ранее верифицированной транзакции.
   * Этот метод выполняет второй шаг в процессе создания платежа - фактическое выполнение платежа.
   * 
   * @param {ExecutePaymentParams} params - Параметры выполнения платежа (идентификатор транзакции)
   * @returns {Promise<ResponseBase<PaymentResponse>>} Промис с результатом выполнения платежа
   * 
   * @example
   * ```typescript
   * const executeResult = await paymentsApi.executePayment({
   *   transaction_id: 'your-transaction-id'
   * });
   * 
   * if (executeResult.success && executeResult.data?.status_code === StatusCode.PAYMENT_SUCCESS) {
   *   console.log('Платеж успешно выполнен!');
   * }
   * ```
   */
  public async executePayment(params: ExecutePaymentParams): Promise<ResponseBase<PaymentResponse>> {
    return this.post<ResponseBase<PaymentResponse>>('/payment/execute', params);
  }

  /**
   * Получает информацию о статусе платежа по идентификатору транзакции.
   * 
   * @param {string} transactionId - Идентификатор транзакции
   * @returns {Promise<PaymentResponse>} Промис со статусом платежа
   * 
   * @example
   * ```typescript
   * const paymentStatus = await paymentsApi.getPaymentStatus('your-transaction-id');
   * console.log(`Статус платежа: ${paymentStatus.status}`);
   * ```
   */
  public async getPaymentStatus(transactionId: string): Promise<PaymentResponse> {
    return this.get<PaymentResponse>('/payment/status', { transaction_id: transactionId });
  }
} 