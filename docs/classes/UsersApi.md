[**G-Engine API Documentation v0.1.1**](../README.md)

***

[G-Engine API Documentation](../globals.md) / UsersApi

# Class: UsersApi

Defined in: [api/users.ts:49](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/users.ts#L49)

API для работы с пользователями.
Предоставляет методы для получения информации о пользователях и их балансе.

## Example

```typescript
// Создание экземпляра API
const usersApi = new UsersApi('https://b2b-api.ggsel.com', 'your-token');

// Получение данных текущего пользователя
const currentUser = await usersApi.getCurrentUser();
console.log(`Текущий пользователь: ${currentUser.name}`);
```

## Extends

- `ApiBase`

## Constructors

### new UsersApi()

> **new UsersApi**(`baseUrl`, `token`?): [`UsersApi`](UsersApi.md)

Defined in: [api/base.ts:37](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/base.ts#L37)

Создает новый экземпляр базового API.

#### Parameters

##### baseUrl

`string` = `'https://b2b-api.ggsel.com'`

Базовый URL API (по умолчанию https://b2b-api.ggsel.com)

##### token?

`string`

Токен авторизации (опционально)

#### Returns

[`UsersApi`](UsersApi.md)

#### Inherited from

`ApiBase.constructor`

## Properties

### client

> `protected` `readonly` **client**: `AxiosInstance`

Defined in: [api/base.ts:17](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/base.ts#L17)

HTTP клиент для выполнения запросов.

#### Inherited from

`ApiBase.client`

***

### baseUrl

> `protected` **baseUrl**: `string`

Defined in: [api/base.ts:23](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/base.ts#L23)

Базовый URL API.

#### Inherited from

`ApiBase.baseUrl`

***

### token

> `protected` **token**: `null` \| `string` = `null`

Defined in: [api/base.ts:29](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/base.ts#L29)

Токен авторизации.

#### Inherited from

`ApiBase.token`

## Methods

### setToken()

> **setToken**(`token`): `void`

Defined in: [api/base.ts:70](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/base.ts#L70)

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

Defined in: [api/base.ts:80](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/base.ts#L80)

Очищает токен авторизации.
После вызова этого метода запросы будут выполняться без авторизации.

#### Returns

`void`

#### Inherited from

`ApiBase.clearToken`

***

### get()

> `protected` **get**\<`T`\>(`url`, `params`?, `config`?): `Promise`\<`T`\>

Defined in: [api/base.ts:94](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/base.ts#L94)

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

Defined in: [api/base.ts:112](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/base.ts#L112)

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

Defined in: [api/base.ts:127](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/base.ts#L127)

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

Defined in: [api/base.ts:141](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/base.ts#L141)

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

### getCurrentUser()

> **getCurrentUser**(): `Promise`\<[`UserMe`](../interfaces/UserMe.md)\>

Defined in: [api/users.ts:63](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/users.ts#L63)

Получает данные текущего авторизованного пользователя.

#### Returns

`Promise`\<[`UserMe`](../interfaces/UserMe.md)\>

Промис с данными текущего пользователя

#### Example

```typescript
const currentUser = await usersApi.getCurrentUser();
console.log(`Логин: ${currentUser.login}`);
console.log(`Имя: ${currentUser.name}`);
console.log(`Баланс: ${currentUser.balance}`);
```

***

### getUserBalance()

> **getUserBalance**(): `Promise`\<[`UserBalance`](../interfaces/UserBalance.md) \| [`UserBalanceObserver`](../interfaces/UserBalanceObserver.md)[]\>

Defined in: [api/users.ts:89](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/users.ts#L89)

Получает информацию о балансе текущего пользователя.
В зависимости от роли пользователя, метод может возвращать разные типы данных.

#### Returns

`Promise`\<[`UserBalance`](../interfaces/UserBalance.md) \| [`UserBalanceObserver`](../interfaces/UserBalanceObserver.md)[]\>

Промис с балансом пользователя

#### Example

```typescript
const balance = await usersApi.getUserBalance();

if (Array.isArray(balance)) {
  // Для пользователя с ролью Observer
  balance.forEach(item => {
    console.log(`Пользователь ${item.login}: ${item.balance} ${item.currency}`);
  });
} else {
  // Для обычного пользователя
  console.log(`Баланс: ${balance.balance} ${balance.currency}`);
  console.log(`Кэшбэк: ${balance.cashback} ${balance.currency}`);
}
```

***

### getUsers()

> **getUsers**(`params`?): `Promise`\<[`UserReadObserver`](../interfaces/UserReadObserver.md)[]\>

Defined in: [api/users.ts:116](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/users.ts#L116)

Получает список пользователей с возможностью фильтрации и пагинации.
Этот метод доступен только для пользователей с ролью Observer.

#### Parameters

##### params?

[`GetUsersParams`](../interfaces/GetUsersParams.md)

Параметры запроса

#### Returns

`Promise`\<[`UserReadObserver`](../interfaces/UserReadObserver.md)[]\>

Промис со списком пользователей

#### Example

```typescript
// Получение списка пользователей с ролью User
const users = await usersApi.getUsers({
  limit: 10,
  offset: 0,
  role_name: UserRole.User
});

// Поиск пользователей по логину
const foundUsers = await usersApi.getUsers({
  search_field: 'login',
  search_value: 'user123'
});
```
