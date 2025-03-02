import { ApiBase } from './base';
import { 
  VerifyPaymentCreate, 
  ExecutePaymentParams, 
  PaymentResponse, 
  ResponseBase 
} from '../types';

export class PaymentsApi extends ApiBase {
  /**
   * Создание и верификация платежа
   * @param paymentData Данные платежа
   * @returns Промис с результатом верификации платежа
   */
  public async verifyPayment(paymentData: VerifyPaymentCreate): Promise<PaymentResponse> {
    return this.post<PaymentResponse>('/payment/verify', paymentData);
  }

  /**
   * Выполнение платежа
   * @param params Параметры выполнения платежа
   * @returns Промис с результатом выполнения платежа
   */
  public async executePayment(params: ExecutePaymentParams): Promise<ResponseBase<PaymentResponse>> {
    return this.post<ResponseBase<PaymentResponse>>('/payment/execute', params);
  }

  /**
   * Получение статуса платежа
   * @param transactionId Идентификатор транзакции
   * @returns Промис со статусом платежа
   */
  public async getPaymentStatus(transactionId: string): Promise<PaymentResponse> {
    return this.get<PaymentResponse>('/payment/status', { transaction_id: transactionId });
  }
} 