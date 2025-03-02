import { generateTransactionId, isValidTransactionId } from '../../src';

/**
 * Пример использования утилит для работы с транзакциями
 */
function transactionUtilsExample() {
  console.log('Пример использования утилит для работы с транзакциями');
  console.log('------------------------------------------------------');

  // Генерация нескольких идентификаторов транзакций
  console.log('Генерация идентификаторов транзакций:');
  const transactionIds: string[] = [];
  
  for (let i = 0; i < 5; i++) {
    const transactionId = generateTransactionId();
    transactionIds.push(transactionId);
    console.log(`  ${i + 1}. ${transactionId}`);
  }
  
  console.log('\nПроверка валидности идентификаторов:');
  
  // Проверка валидности сгенерированных идентификаторов
  for (let i = 0; i < transactionIds.length; i++) {
    const isValid = isValidTransactionId(transactionIds[i]);
    console.log(`  ${i + 1}. ${transactionIds[i]} - ${isValid ? 'Валидный' : 'Невалидный'}`);
  }
  
  // Проверка невалидных идентификаторов
  console.log('\nПроверка невалидных идентификаторов:');
  const invalidIds = [
    '123456', // слишком короткий
    'not-a-uuid', // неправильный формат
    '12345678-1234-1234-1234-1234567890ab', // неправильная версия UUID
    '12345678-1234-4234-7234-1234567890ab', // неправильный вариант UUID
  ];
  
  for (let i = 0; i < invalidIds.length; i++) {
    const isValid = isValidTransactionId(invalidIds[i]);
    console.log(`  ${i + 1}. ${invalidIds[i]} - ${isValid ? 'Валидный' : 'Невалидный'}`);
  }
}

// Запускаем пример
transactionUtilsExample(); 