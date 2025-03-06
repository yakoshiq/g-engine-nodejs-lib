[**G-Engine API Documentation v0.1.1**](../README.md)

***

[G-Engine API Documentation](../globals.md) / generateTransactionId

# Function: generateTransactionId()

> **generateTransactionId**(): `string`

Defined in: [utils/transaction.ts:19](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/utils/transaction.ts#L19)

Генерирует уникальный идентификатор транзакции в формате UUID v4.
UUID v4 формат: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx, где x - любая шестнадцатеричная цифра,
4 указывает на версию UUID, а y принимает одно из значений: 8, 9, a или b.

## Returns

`string`

Строка с идентификатором транзакции в формате UUID v4

## Example

```typescript
const transactionId = generateTransactionId();
// Пример результата: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
```
