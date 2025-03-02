/**
 * @fileoverview Утилиты для работы с транзакциями в G-Engine API.
 * @module utils/transaction
 */

/**
 * Генерирует уникальный идентификатор транзакции в формате UUID v4.
 * UUID v4 формат: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx, где x - любая шестнадцатеричная цифра,
 * 4 указывает на версию UUID, а y принимает одно из значений: 8, 9, a или b.
 *
 * @example
 * ```typescript
 * const transactionId = generateTransactionId();
 * // Пример результата: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
 * ```
 *
 * @returns {string} Строка с идентификатором транзакции в формате UUID v4
 */
export function generateTransactionId(): string {
  // Реализация генерации UUID v4
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Проверяет, является ли строка валидным идентификатором транзакции в формате UUID v4.
 * Проверка осуществляется с помощью регулярного выражения, которое соответствует формату UUID v4.
 *
 * @example
 * ```typescript
 * const isValid = isValidTransactionId("f47ac10b-58cc-4372-a567-0e02b2c3d479");
 * // Результат: true
 *
 * const isInvalid = isValidTransactionId("not-a-uuid");
 * // Результат: false
 * ```
 *
 * @param {string} transactionId - Идентификатор транзакции для проверки
 * @returns {boolean} true, если идентификатор соответствует формату UUID v4, иначе false
 */
export function isValidTransactionId(transactionId: string): boolean {
  // Проверка на соответствие формату UUID
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(transactionId);
}
