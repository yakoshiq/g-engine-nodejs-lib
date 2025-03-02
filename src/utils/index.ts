/**
 * @fileoverview Экспорт всех утилит библиотеки G-Engine API.
 * @module utils
 * 
 * Этот модуль предоставляет различные утилиты для работы с G-Engine API,
 * включая генерацию и валидацию идентификаторов транзакций.
 * 
 * @example
 * ```typescript
 * import { generateTransactionId, isValidTransactionId } from 'g-engine-api';
 * 
 * // Генерация идентификатора транзакции
 * const transactionId = generateTransactionId();
 * 
 * // Проверка валидности идентификатора
 * const isValid = isValidTransactionId(transactionId);
 * ```
 */
export * from './transaction'; 