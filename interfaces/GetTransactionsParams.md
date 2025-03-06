[**G-Engine API Documentation v0.1.1**](../README.md)

***

[G-Engine API Documentation](../globals.md) / GetTransactionsParams

# Interface: GetTransactionsParams

Defined in: [api/transactions.ts:23](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/transactions.ts#L23)

Параметры для получения списка транзакций.

 GetTransactionsParams

## Properties

### user\_cache?

> `optional` **user\_cache**: `boolean`

Defined in: [api/transactions.ts:24](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/transactions.ts#L24)

Использовать кэш пользователей

***

### limit?

> `optional` **limit**: `number`

Defined in: [api/transactions.ts:25](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/transactions.ts#L25)

Максимальное количество транзакций в ответе

***

### offset?

> `optional` **offset**: `number`

Defined in: [api/transactions.ts:26](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/transactions.ts#L26)

Смещение для пагинации

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: [api/transactions.ts:27](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/transactions.ts#L27)

Поле для сортировки

***

### sort\_order?

> `optional` **sort\_order**: `string`

Defined in: [api/transactions.ts:28](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/transactions.ts#L28)

Порядок сортировки ('asc' или 'desc')

***

### start\_date?

> `optional` **start\_date**: `string`

Defined in: [api/transactions.ts:29](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/transactions.ts#L29)

Начальная дата для фильтрации (в формате YYYY-MM-DD)

***

### end\_date?

> `optional` **end\_date**: `string`

Defined in: [api/transactions.ts:30](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/transactions.ts#L30)

Конечная дата для фильтрации (в формате YYYY-MM-DD)

***

### search\_field?

> `optional` **search\_field**: `string`

Defined in: [api/transactions.ts:31](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/transactions.ts#L31)

Поле для поиска

***

### search\_value?

> `optional` **search\_value**: `string`

Defined in: [api/transactions.ts:32](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/transactions.ts#L32)

Значение для поиска
