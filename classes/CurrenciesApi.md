[**G-Engine API Documentation v0.1.1**](../README.md)

***

[G-Engine API Documentation](../globals.md) / CurrenciesApi

# Class: CurrenciesApi

Defined in: [api/currencies.ts:27](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/api/currencies.ts#L27)

API для работы с валютами.
Предоставляет методы для получения курсов валют из различных источников.

## Example

```typescript
// Создание экземпляра API
const currenciesApi = new CurrenciesApi('https://b2b-api.ggsel.com', 'your-token');

// Получение курса валюты
const currencyRate = await currenciesApi.getCurrencyRate(
  RateSource.cb_rf,
  CurrencyPair.USD_RUB
);

console.log(`Курс ${currencyRate.data?.pair}: ${currencyRate.data?.currency_rate}`);
```

## Extends

- `ApiBase`

## Constructors

### new CurrenciesApi()

> **new CurrenciesApi**(`baseUrl`, `token`?): [`CurrenciesApi`](CurrenciesApi.md)

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

[`CurrenciesApi`](CurrenciesApi.md)

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

***

### getCurrencyRate()

> **getCurrencyRate**(`source`, `pair`): `Promise`\<[`ResponseBase`](../interfaces/ResponseBase.md)\<[`CurrencyRead`](../interfaces/CurrencyRead.md)\>\>

Defined in: [api/currencies.ts:56](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/4d4a07d9407cb4a686aa9a7d498ca53c3006a843/src/api/currencies.ts#L56)

Получает актуальный курс валюты из указанного источника.

#### Parameters

##### source

[`RateSource`](../enumerations/RateSource.md)

Источник курса валют (cb_rf - Центральный Банк РФ, steam - Steam)

##### pair

[`CurrencyPair`](../enumerations/CurrencyPair.md)

Валютная пара (USD:RUB, EUR:RUB)

#### Returns

`Promise`\<[`ResponseBase`](../interfaces/ResponseBase.md)\<[`CurrencyRead`](../interfaces/CurrencyRead.md)\>\>

Промис с курсом валюты

#### Example

```typescript
// Получение курса USD к RUB из ЦБ РФ
const usdRubRate = await currenciesApi.getCurrencyRate(
  RateSource.cb_rf,
  CurrencyPair.USD_RUB
);

// Получение курса EUR к RUB из ЦБ РФ
const eurRubRate = await currenciesApi.getCurrencyRate(
  RateSource.cb_rf,
  CurrencyPair.EUR_RUB
);

// Получение курса USD к RUB из Steam
const steamRate = await currenciesApi.getCurrencyRate(
  RateSource.steam,
  CurrencyPair.USD_RUB
);
```
