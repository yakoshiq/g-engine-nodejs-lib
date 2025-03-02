import { GEngineClient, StatusCode, CurrencyPair, RateSource, UserRole } from '../../src';
import { v4 as uuidv4 } from 'uuid';

/**
 * Комплексный пример использования G-Engine API
 */
async function fullClientExample() {
  console.log('Запуск комплексного примера G-Engine API');
  console.log('----------------------------------------');

  // Создаем экземпляр клиента
  const client = new GEngineClient();
  let isAuthenticated = false;

  try {
    // 1. Аутентификация
    console.log('\n1. Аутентификация');
    console.log('----------------');
    
    try {
      const token = await client.auth.login({
        login: 'example_user',
        password: 'secure_password'
      });
      
      console.log('✅ Успешная аутентификация!');
      console.log(`Тип токена: ${token.token_type}`);
      console.log(`Токен: ${token.access_token.substring(0, 10)}...`);
      isAuthenticated = true;
    } catch (error) {
      console.error('❌ Ошибка аутентификации:', error);
      return; // Прерываем выполнение, если аутентификация не удалась
    }

    // 2. Информация о пользователе
    if (isAuthenticated) {
      console.log('\n2. Информация о пользователе');
      console.log('---------------------------');
      
      try {
        const currentUser = await client.users.getCurrentUser();
        console.log('✅ Информация о текущем пользователе:');
        console.log(`Логин: ${currentUser.login}`);
        console.log(`Имя: ${currentUser.name}`);
        console.log(`Роль: ${currentUser.role || 'Не указана'}`);
        console.log(`Баланс: ${currentUser.balance || 0}`);
        console.log(`Активен: ${currentUser.is_active ? 'Да' : 'Нет'}`);
        
        // Получаем баланс пользователя
        const balance = await client.users.getUserBalance();
        console.log('\n✅ Баланс пользователя:');
        
        if (Array.isArray(balance)) {
          balance.forEach((item, index) => {
            console.log(`Пользователь ${index + 1}:`);
            console.log(`  Валюта: ${item.currency}`);
            console.log(`  Баланс: ${item.balance}`);
            console.log(`  Кэшбэк: ${item.cashback}`);
          });
        } else {
          console.log(`Валюта: ${balance.currency}`);
          console.log(`Баланс: ${balance.balance}`);
          console.log(`Кэшбэк: ${balance.cashback}`);
        }
      } catch (error) {
        console.error('❌ Ошибка получения информации о пользователе:', error);
      }
    }

    // 3. Курсы валют
    if (isAuthenticated) {
      console.log('\n3. Курсы валют');
      console.log('--------------');
      
      try {
        // Получаем курс USD к RUB от ЦБ РФ
        const usdRubRate = await client.currencies.getCurrencyRate(
          RateSource.cb_rf,
          CurrencyPair.USD_RUB
        );
        
        if (usdRubRate.success && usdRubRate.data) {
          console.log('✅ Курс USD к RUB:');
          console.log(`Источник: ${usdRubRate.data.source}`);
          console.log(`Пара: ${usdRubRate.data.pair}`);
          console.log(`Курс: ${usdRubRate.data.currency_rate}`);
        } else {
          console.log(`❌ Ошибка получения курса USD к RUB: ${usdRubRate.message}`);
        }
      } catch (error) {
        console.error('❌ Ошибка получения курсов валют:', error);
      }
    }

    // 4. Создание и верификация платежа
    if (isAuthenticated) {
      console.log('\n4. Создание и верификация платежа');
      console.log('--------------------------------');
      
      try {
        // Генерируем уникальный идентификатор транзакции
        const transactionId = uuidv4();
        console.log(`Идентификатор транзакции: ${transactionId}`);
        
        // Создаем и верифицируем платеж
        const verifyResult = await client.payments.verifyPayment({
          transaction_id: transactionId,
          service_id: 1, // ID сервиса
          account: 'user123', // Аккаунт для пополнения
          amount: 100, // Сумма платежа
          currency: 'RUB' // Валюта
        });
        
        console.log('✅ Результат верификации платежа:');
        console.log(`ID транзакции: ${verifyResult.transaction_id}`);
        console.log(`Сумма (RUB): ${verifyResult.amount_rub}`);
        console.log(`Аккаунт: ${verifyResult.account}`);
        console.log(`Дата: ${verifyResult.date}`);
        console.log(`Статус: ${verifyResult.status}`);
        console.log(`Код статуса: ${verifyResult.status_code}`);
        
        // Если верификация успешна, выполняем платеж
        if (verifyResult.status_code !== StatusCode.PAYMENT_VERIFICATION_FAILED) {
          console.log('\n✅ Выполнение платежа...');
          
          const executeResult = await client.payments.executePayment({
            transaction_id: transactionId
          });
          
          if (executeResult.success) {
            console.log('✅ Платеж успешно выполнен!');
            if (executeResult.data) {
              console.log(`Статус: ${executeResult.data.status}`);
              console.log(`Код статуса: ${executeResult.data.status_code}`);
            }
          } else {
            console.log(`❌ Ошибка выполнения платежа: ${executeResult.message}`);
          }
          
          // Получаем статус платежа
          const paymentStatus = await client.payments.getPaymentStatus(transactionId);
          console.log('\n✅ Текущий статус платежа:');
          console.log(`ID транзакции: ${paymentStatus.transaction_id}`);
          console.log(`Статус: ${paymentStatus.status}`);
          console.log(`Код статуса: ${paymentStatus.status_code}`);
        }
      } catch (error) {
        console.error('❌ Ошибка при работе с платежами:', error);
      }
    }

    // 5. Получение транзакций
    if (isAuthenticated) {
      console.log('\n5. Получение транзакций');
      console.log('----------------------');
      
      try {
        const transactions = await client.transactions.getTransactions({
          limit: 5,
          offset: 0,
          sort_by: 'date',
          sort_order: 'desc'
        });
        
        console.log(`✅ Получено транзакций: ${transactions.length}`);
        
        if (transactions.length > 0) {
          transactions.forEach((transaction, index) => {
            console.log(`\nТранзакция ${index + 1}:`);
            console.log(`ID: ${transaction.transaction_id}`);
            console.log(`Дата: ${transaction.date}`);
            console.log(`Статус: ${transaction.status}`);
            console.log(`Сумма: ${transaction.amount}`);
          });
        } else {
          console.log('Транзакции не найдены');
        }
      } catch (error) {
        console.error('❌ Ошибка получения транзакций:', error);
      }
    }

    // 6. Выход из системы
    if (isAuthenticated) {
      console.log('\n6. Выход из системы');
      console.log('------------------');
      
      client.auth.logout();
      console.log('✅ Выход из системы выполнен');
    }

  } catch (error) {
    console.error('❌ Общая ошибка:', error);
  }

  console.log('\n----------------------------------------');
  console.log('Завершение комплексного примера G-Engine API');
}

// Запускаем пример
fullClientExample().catch(console.error); 