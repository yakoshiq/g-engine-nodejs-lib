[**G-Engine API Documentation v0.1.1**](../README.md)

***

[G-Engine API Documentation](../globals.md) / TransactionsApi

# Class: TransactionsApi

Defined in: [api/transactions.ts:53](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/transactions.ts#L53)

API для работы с транзакциями.
Предоставляет методы для получения информации о транзакциях.

## Example

```typescript
// Создание экземпляра API
const transactionsApi = new TransactionsApi('https://b2b-api.ggsel.com', 'your-token');

// Получение списка транзакций
const transactions = await transactionsApi.getTransactions({
  limit: 10,
  offset: 0,
  sort_by: 'date',
  sort_order: 'desc'
});
```

## Extends

- `ApiBase`

## Constructors

### new TransactionsApi()

> **new TransactionsApi**(`baseUrl`, `token`?): [`TransactionsApi`](TransactionsApi.md)

Defined in: [api/base.ts:37](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/base.ts#L37)

Создает новый экземпляр базового API.

#### Parameters

##### baseUrl

`string` = `'https://b2b-api.ggsel.com'`

Базовый URL API (по умолчанию https://b2b-api.ggsel.com)

##### token?

`string`

Токен авторизации (опционально)

#### Returns

[`TransactionsApi`](TransactionsApi.md)

#### Inherited from

`ApiBase.constructor`

## Properties

### client

> `protected` `readonly` **client**: `AxiosInstance`

Defined in: [api/base.ts:17](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/base.ts#L17)

HTTP клиент для выполнения запросов.

#### Inherited from

`ApiBase.client`

***

### baseUrl

> `protected` **baseUrl**: `string`

Defined in: [api/base.ts:23](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/base.ts#L23)

Базовый URL API.

#### Inherited from

`ApiBase.baseUrl`

***

### token

> `protected` **token**: `null` \| `string` = `null`

Defined in: [api/base.ts:29](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/base.ts#L29)

Токен авторизации.

#### Inherited from

`ApiBase.token`

## Methods

### setToken()

> **setToken**(`token`): `void`

Defined in: [api/base.ts:70](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/base.ts#L70)

Устанавливает токен авторизации для API.
Этот токен будет автоматически добавляться ко всем запросам.

#### Parameters

##### token

`string`

Токен авторизации

#### Returns

`void`

#### Inherited from

`ApiBase.setToken`

***

### clearToken()

> **clearToken**(): `void`

Defined in: [api/base.ts:80](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/base.ts#L80)

Очищает токен авторизации.
После вызова этого метода запросы будут выполняться без авторизации.

#### Returns

`void`

#### Inherited from

`ApiBase.clearToken`

***

### get()

> `protected` **get**\<`T`\>(`url`, `params`?, `config`?): `Promise`\<`T`\>

Defined in: [api/base.ts:94](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/base.ts#L94)

Выполняет GET запрос к API.

#### Type Parameters

• **T**

Тип возвращаемых данных

#### Parameters

##### url

`string`

URL запроса (относительно базового URL API)

##### params?

`any`

Параметры запроса (query parameters)

##### config?

`AxiosRequestConfig`\<`any`\>

Дополнительная конфигурация запроса

#### Returns

`Promise`\<`T`\>

Промис с результатом запроса

#### Inherited from

`ApiBase.get`

***

### post()

> `protected` **post**\<`T`\>(`url`, `data`?, `config`?): `Promise`\<`T`\>

Defined in: [api/base.ts:112](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/base.ts#L112)

Выполняет POST запрос к API.

#### Type Parameters

• **T**

Тип возвращаемых данных

#### Parameters

##### url

`string`

URL запроса (относительно базового URL API)

##### data?

`any`

Данные запроса (тело запроса)

##### config?

`AxiosRequestConfig`\<`any`\>

Дополнительная конфигурация запроса

#### Returns

`Promise`\<`T`\>

Промис с результатом запроса

#### Inherited from

`ApiBase.post`

***

### put()

> `protected` **put**\<`T`\>(`url`, `data`?, `config`?): `Promise`\<`T`\>

Defined in: [api/base.ts:127](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/base.ts#L127)

Выполняет PUT запрос к API.

#### Type Parameters

• **T**

Тип возвращаемых данных

#### Parameters

##### url

`string`

URL запроса (относительно базового URL API)

##### data?

`any`

Данные запроса (тело запроса)

##### config?

`AxiosRequestConfig`\<`any`\>

Дополнительная конфигурация запроса

#### Returns

`Promise`\<`T`\>

Промис с результатом запроса

#### Inherited from

`ApiBase.put`

***

### delete()

> `protected` **delete**\<`T`\>(`url`, `config`?): `Promise`\<`T`\>

Defined in: [api/base.ts:141](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/base.ts#L141)

Выполняет DELETE запрос к API.

#### Type Parameters

• **T**

Тип возвращаемых данных

#### Parameters

##### url

`string`

URL запроса (относительно базового URL API)

##### config?

`AxiosRequestConfig`\<`any`\>

Дополнительная конфигурация запроса

#### Returns

`Promise`\<`T`\>

Промис с результатом запроса

#### Inherited from

`ApiBase.delete`

***

### getTransactions()

> **getTransactions**(`params`?): `Promise`\<[`TransactionRead`](../interfaces/TransactionRead.md)[] \| [`TransactionReadObserver`](../interfaces/TransactionReadObserver.md)[]\>

Defined in: [api/transactions.ts:78](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/6b4ec644f458bf28039e0209e5a91bd0ec704446/src/api/transactions.ts#L78)

Получает список транзакций с возможностью фильтрации и пагинации.
В зависимости от роли пользователя, метод может возвращать разные типы данных.

#### Parameters

##### params?

[`GetTransactionsParams`](../interfaces/GetTransactionsParams.md)

Параметры запроса

#### Returns

`Promise`\<[`TransactionRead`](../interfaces/TransactionRead.md)[] \| [`TransactionReadObserver`](../interfaces/TransactionReadObserver.md)[]\>

Промис со списком транзакций

#### Example

```typescript
// Получение последних 10 транзакций
const transactions = await transactionsApi.getTransactions({
  limit: 10,
  offset: 0,
  sort_by: 'date',
  sort_order: 'desc'
});

// Поиск транзакций по аккаунту
const userTransactions = await transactionsApi.getTransactions({
  search_field: 'account',
  search_value: 'user123'
});
```
