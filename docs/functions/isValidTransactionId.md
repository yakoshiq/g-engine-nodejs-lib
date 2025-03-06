[**G-Engine API Documentation v0.1.1**](../README.md)

***

[G-Engine API Documentation](../globals.md) / isValidTransactionId

# Function: isValidTransactionId()

> **isValidTransactionId**(`transactionId`): `boolean`

Defined in: [utils/transaction.ts:44](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/utils/transaction.ts#L44)

Проверяет, является ли строка валидным идентификатором транзакции в формате UUID v4.
Проверка осуществляется с помощью регулярного выражения, которое соответствует формату UUID v4.

## Parameters

### transactionId

`string`

Идентификатор транзакции для проверки

## Returns

`boolean`

true, если идентификатор соответствует формату UUID v4, иначе false

## Example

```typescript
const isValid = isValidTransactionId("f47ac10b-58cc-4372-a567-0e02b2c3d479");
// Результат: true

const isInvalid = isValidTransactionId("not-a-uuid");
// Результат: false
```
