import { generateTransactionId, isValidTransactionId } from '../../src/utils/transaction';

describe('Transaction Utils', () => {
  describe('generateTransactionId', () => {
    it('должен генерировать строку в формате UUID v4', () => {
      const transactionId = generateTransactionId();

      // Проверяем, что результат - строка
      expect(typeof transactionId).toBe('string');

      // Проверяем, что результат соответствует формату UUID v4
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      expect(uuidRegex.test(transactionId)).toBe(true);
    });

    it('должен генерировать уникальные идентификаторы при каждом вызове', () => {
      const ids = new Set();
      const iterations = 1000;

      // Генерируем множество идентификаторов
      for (let i = 0; i < iterations; i++) {
        ids.add(generateTransactionId());
      }

      // Проверяем, что все идентификаторы уникальны
      expect(ids.size).toBe(iterations);
    });
  });

  describe('isValidTransactionId', () => {
    it('должен возвращать true для валидных UUID v4', () => {
      const validIds = [
        '123e4567-e89b-42d3-a456-556642440000',
        'f47ac10b-58cc-4372-a567-0e02b2c3d479',
        '550e8400-e29b-41d4-a716-446655440000',
        'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const r = (Math.random() * 16) | 0;
          const v = c === 'x' ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }),
      ];

      validIds.forEach(id => {
        expect(isValidTransactionId(id)).toBe(true);
      });
    });

    it('должен возвращать false для невалидных UUID', () => {
      const invalidIds = [
        '', // Пустая строка
        'not-a-uuid', // Произвольная строка
        '123e4567-e89b-12d3-a456-556642440000', // Неверная версия (не 4)
        '123e4567-e89b-42d3-7456-556642440000', // Неверный вариант (не 8, 9, a, b)
        '123e4567-e89b-42d3-a456-55664244000', // Недостаточная длина
        '123e4567-e89b-42d3-a456-5566424400000', // Избыточная длина
      ];

      invalidIds.forEach(id => {
        expect(isValidTransactionId(id)).toBe(false);
      });
    });

    it('должен корректно проверять идентификаторы, сгенерированные функцией generateTransactionId', () => {
      const generatedId = generateTransactionId();
      expect(isValidTransactionId(generatedId)).toBe(true);
    });
  });
});
