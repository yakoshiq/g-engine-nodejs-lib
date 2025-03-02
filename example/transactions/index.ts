import { GEngineClient, StatusCode } from '../../src';

/**
 * Пример работы с транзакциями
 */
async function transactionsExample() {
  // Создаем экземпляр клиента
  const client = new GEngineClient();

  try {
    // Аутентификация
    const token = await client.auth.login({
      login: 'example_user',
      password: 'secure_password'
    });
    console.log('Успешная аутентификация!');

    // Получаем список транзакций с параметрами
    const transactions = await client.transactions.getTransactions({
      limit: 10, // Ограничение количества результатов
      offset: 0, // Смещение для пагинации
      sort_by: 'date', // Сортировка по дате
      sort_order: 'desc', // Сортировка по убыванию
      start_date: '2023-01-01', // Начальная дата
      end_date: '2023-12-31', // Конечная дата
      user_cache: true // Использовать кэш пользователя
    });

    console.log(`Получено транзакций: ${transactions.length}`);

    // Выводим информацию о транзакциях
    transactions.forEach((transaction, index) => {
      console.log(`\nТранзакция ${index + 1}:`);
      console.log(`  ID: ${transaction.transaction_id}`);
      console.log(`  Дата: ${transaction.date}`);
      console.log(`  Аккаунт: ${transaction.account}`);
      console.log(`  Сумма: ${transaction.amount}`);
      console.log(`  Сумма в USD: ${transaction.amount_usd}`);
      console.log(`  Статус: ${transaction.status}`);
      console.log(`  Код статуса: ${transaction.status_code}`);

      // Проверяем наличие дочерних транзакций
      if (transaction.children && transaction.children.length > 0) {
        console.log('  Дочерние транзакции:');
        transaction.children.forEach((child, childIndex) => {
          console.log(`    Дочерняя транзакция ${childIndex + 1}:`);
          console.log(`      ID: ${child.transaction_id}`);
          console.log(`      Дата: ${child.date}`);
          console.log(`      Сумма: ${child.amount}`);
          console.log(`      Статус: ${child.status}`);
        });
      }

      // Если транзакция имеет статус PAYMENT_SUCCESS, выводим дополнительную информацию
      if (transaction.status_code === StatusCode.PAYMENT_SUCCESS) {
        console.log('  Статус: Успешно выполнена');
      } else if (transaction.status_code === StatusCode.PAYMENT_IN_PROGRESS) {
        console.log('  Статус: В процессе выполнения');
      }
    });

    // Пример фильтрации транзакций по статусу
    const successfulTransactions = transactions.filter(
      transaction => transaction.status_code === StatusCode.PAYMENT_SUCCESS
    );

    console.log(`\nКоличество успешных транзакций: ${successfulTransactions.length}`);

  } catch (error) {
    console.error('Ошибка при работе с транзакциями:', error);
  }
}

// Запускаем пример
transactionsExample().catch(console.error); 