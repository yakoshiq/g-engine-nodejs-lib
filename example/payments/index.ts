import { GEngineClient, StatusCode, generateTransactionId } from '../../src';

/**
 * Пример работы с платежами
 */
async function paymentsExample() {
  // Создаем экземпляр клиента
  const client = new GEngineClient();

  try {
    // Аутентификация
    const token = await client.auth.login({
      login: 'example_user',
      password: 'secure_password'
    });
    console.log('Успешная аутентификация!');

    // Генерируем уникальный идентификатор транзакции с помощью нашей утилиты
    const transactionId = generateTransactionId();
    console.log('Идентификатор транзакции:', transactionId);

    // Создаем и верифицируем платеж
    const verifyResult = await client.payments.verifyPayment({
      transaction_id: transactionId,
      service_id: 1, // ID сервиса
      account: 'user123', // Аккаунт для пополнения
      amount: 100, // Сумма платежа
      currency: 'RUB' // Валюта
    });

    console.log('Результат верификации платежа:', verifyResult);

    // Проверяем статус верификации
    if (verifyResult.status_code === StatusCode.PAYMENT_VERIFICATION_FAILED) {
      console.error('Ошибка верификации платежа');
      return;
    }

    // Выполняем платеж
    const executeResult = await client.payments.executePayment({
      transaction_id: transactionId
    });

    console.log('Результат выполнения платежа:', executeResult);

    // Проверяем статус платежа
    if (executeResult.success && executeResult.data?.status_code === StatusCode.PAYMENT_SUCCESS) {
      console.log('Платеж успешно выполнен!');
    } else {
      console.log('Платеж в обработке или произошла ошибка');
    }

    // Получаем статус платежа
    const paymentStatus = await client.payments.getPaymentStatus(transactionId);
    console.log('Текущий статус платежа:', paymentStatus);

  } catch (error) {
    console.error('Ошибка при работе с платежами:', error);
  }
}

// Запускаем пример
paymentsExample().catch(console.error); 