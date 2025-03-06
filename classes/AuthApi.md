[**G-Engine API Documentation v0.1.1**](../README.md)

***

[G-Engine API Documentation](../globals.md) / AuthApi

# Class: AuthApi

Defined in: [api/auth.ts:28](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/api/auth.ts#L28)

API для работы с аутентификацией.
Предоставляет методы для входа и выхода из системы.

## Example

```typescript
// Создание экземпляра API
const authApi = new AuthApi('https://b2b-api.ggsel.com');

// Авторизация
const token = await authApi.login({
  login: 'your-login',
  password: 'your-password'
});

// Выход из системы
authApi.logout();
```

## Extends

- `ApiBase`

## Constructors

### new AuthApi()

> **new AuthApi**(`baseUrl`, `token`?): [`AuthApi`](AuthApi.md)

Defined in: [api/base.ts:37](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/api/base.ts#L37)

Создает новый экземпляр базового API.

#### Parameters

##### baseUrl

`string` = `'https://b2b-api.ggsel.com'`

Базовый URL API (по умолчанию https://b2b-api.ggsel.com)

##### token?

`string`

Токен авторизации (опционально)

#### Returns

[`AuthApi`](AuthApi.md)

#### Inherited from

`ApiBase.constructor`

## Properties

### client

> `protected` `readonly` **client**: `AxiosInstance`

Defined in: [api/base.ts:17](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/api/base.ts#L17)

HTTP клиент для выполнения запросов.

#### Inherited from

`ApiBase.client`

***

### baseUrl

> `protected` **baseUrl**: `string`

Defined in: [api/base.ts:23](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/api/base.ts#L23)

Базовый URL API.

#### Inherited from

`ApiBase.baseUrl`

***

### token

> `protected` **token**: `null` \| `string` = `null`

Defined in: [api/base.ts:29](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/api/base.ts#L29)

Токен авторизации.

#### Inherited from

`ApiBase.token`

## Methods

### setParentClient()

> **setParentClient**(`client`): `void`

Defined in: [api/auth.ts:39](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/api/auth.ts#L39)

Устанавливает ссылку на родительский клиент.

#### Parameters

##### client

Родительский клиент G-Engine

###### setToken

(`token`) => `void`

#### Returns

`void`

***

### login()

> **login**(`credentials`): `Promise`\<[`Token`](../interfaces/Token.md)\>

Defined in: [api/auth.ts:59](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/api/auth.ts#L59)

Выполняет авторизацию пользователя и получает токен доступа.
После успешной авторизации токен автоматически устанавливается для всех последующих запросов.

#### Parameters

##### credentials

[`UserAuth`](../interfaces/UserAuth.md)

Учетные данные пользователя (логин и пароль)

#### Returns

`Promise`\<[`Token`](../interfaces/Token.md)\>

Промис с токеном авторизации

#### Example

```typescript
const token = await authApi.login({
  login: 'your-login',
  password: 'your-password'
});
console.log(`Токен: ${token.access_token}`);
```

***

### logout()

> **logout**(): `void`

Defined in: [api/auth.ts:84](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/api/auth.ts#L84)

Выполняет выход из системы путем очистки токена авторизации.
После вызова этого метода все последующие запросы будут выполняться без авторизации.

#### Returns

`void`

#### Example

```typescript
authApi.logout();
```

***

### setToken()

> **setToken**(`token`): `void`

Defined in: [api/base.ts:70](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/api/base.ts#L70)

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

Defined in: [api/base.ts:80](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/api/base.ts#L80)

Очищает токен авторизации.
После вызова этого метода запросы будут выполняться без авторизации.

#### Returns

`void`

#### Inherited from

`ApiBase.clearToken`

***

### get()

> `protected` **get**\<`T`\>(`url`, `params`?, `config`?): `Promise`\<`T`\>

Defined in: [api/base.ts:94](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/api/base.ts#L94)

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

Defined in: [api/base.ts:112](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/api/base.ts#L112)

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

Defined in: [api/base.ts:127](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/api/base.ts#L127)

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

Defined in: [api/base.ts:141](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/api/base.ts#L141)

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
