[**G-Engine API Documentation v0.1.1**](../README.md)

***

[G-Engine API Documentation](../globals.md) / GEngineClient

# Class: GEngineClient

Defined in: [index.ts:44](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/index.ts#L44)

Основной класс клиента G-Engine API.
Предоставляет доступ ко всем API модулям и управление авторизацией.

## Example

```typescript
// Создание клиента без токена
const client = new GEngineClient();

// Создание клиента с токеном
const client = new GEngineClient('https://b2b-api.ggsel.com', 'your-token');

// Авторизация
const token = await client.auth.login({
  login: 'your-login',
  password: 'your-password'
});

// Установка токена
client.setToken(token.access_token);
```

## Constructors

### new GEngineClient()

> **new GEngineClient**(`baseUrl`, `token`?): [`GEngineClient`](GEngineClient.md)

Defined in: [index.ts:81](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/index.ts#L81)

Создает новый экземпляр клиента G-Engine API.

#### Parameters

##### baseUrl

`string` = `'https://b2b-api.ggsel.com'`

Базовый URL API (по умолчанию https://b2b-api.ggsel.com)

##### token?

`string`

Токен авторизации (опционально)

#### Returns

[`GEngineClient`](GEngineClient.md)

## Properties

### auth

> `readonly` **auth**: [`AuthApi`](AuthApi.md)

Defined in: [index.ts:49](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/index.ts#L49)

API для работы с аутентификацией.
Предоставляет методы для входа и выхода из системы.

***

### users

> `readonly` **users**: [`UsersApi`](UsersApi.md)

Defined in: [index.ts:55](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/index.ts#L55)

API для работы с пользователями.
Предоставляет методы для получения информации о пользователях и их балансе.

***

### payments

> `readonly` **payments**: [`PaymentsApi`](PaymentsApi.md)

Defined in: [index.ts:61](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/index.ts#L61)

API для работы с платежами.
Предоставляет методы для создания, верификации и выполнения платежей.

***

### transactions

> `readonly` **transactions**: [`TransactionsApi`](TransactionsApi.md)

Defined in: [index.ts:67](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/index.ts#L67)

API для работы с транзакциями.
Предоставляет методы для получения информации о транзакциях.

***

### currencies

> `readonly` **currencies**: [`CurrenciesApi`](CurrenciesApi.md)

Defined in: [index.ts:73](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/index.ts#L73)

API для работы с валютами.
Предоставляет методы для получения курсов валют.

## Methods

### setToken()

> **setToken**(`token`): `void`

Defined in: [index.ts:99](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/index.ts#L99)

Устанавливает токен авторизации для всех API модулей.
Используется после успешной авторизации для последующих запросов.

#### Parameters

##### token

`string`

Токен авторизации

#### Returns

`void`

***

### clearToken()

> **clearToken**(): `void`

Defined in: [index.ts:113](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/index.ts#L113)

Очищает токен авторизации для всех API модулей.
Используется при выходе из системы.

#### Returns

`void`
