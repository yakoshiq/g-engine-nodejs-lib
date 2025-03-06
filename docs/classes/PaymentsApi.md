[**G-Engine API Documentation v0.1.1**](../README.md)

***

[G-Engine API Documentation](../globals.md) / PaymentsApi

# Class: PaymentsApi

Defined in: [api/payments.ts:32](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/payments.ts#L32)

API для работы с платежами.
Предоставляет методы для создания, верификации и выполнения платежей,
а также для получения информации о статусе платежей.

## Example

```typescript
// Создание экземпляра API
const paymentsApi = new PaymentsApi('https://b2b-api.ggsel.com', 'your-token');

// Генерация идентификатора транзакции
const transactionId = generateTransactionId();

// Создание и верификация платежа
const verifyResult = await paymentsApi.verifyPayment({
  transaction_id: transactionId,
  service_id: 1,
  account: 'user-account',
  amount: 100,
  currency: 'RUB'
});
```

## Extends

- `ApiBase`

## Constructors

### new PaymentsApi()

> **new PaymentsApi**(`baseUrl`, `token`?): [`PaymentsApi`](PaymentsApi.md)

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

[`PaymentsApi`](PaymentsApi.md)

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

### verifyPayment()

> **verifyPayment**(`paymentData`): `Promise`\<[`PaymentResponse`](../interfaces/PaymentResponse.md)\>

Defined in: [api/payments.ts:51](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/payments.ts#L51)

Создает и верифицирует платеж.
Этот метод выполняет первый шаг в процессе создания платежа - верификацию данных.

#### Parameters

##### paymentData

[`VerifyPaymentCreate`](../interfaces/VerifyPaymentCreate.md)

Данные платежа для верификации

#### Returns

`Promise`\<[`PaymentResponse`](../interfaces/PaymentResponse.md)\>

Промис с результатом верификации платежа

#### Example

```typescript
const verifyResult = await paymentsApi.verifyPayment({
  transaction_id: generateTransactionId(),
  service_id: 1,
  account: 'user-account',
  amount: 100,
  currency: 'RUB'
});
```

***

### executePayment()

> **executePayment**(`params`): `Promise`\<[`ResponseBase`](../interfaces/ResponseBase.md)\<[`PaymentResponse`](../interfaces/PaymentResponse.md)\>\>

Defined in: [api/payments.ts:73](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/payments.ts#L73)

Выполняет платеж на основе ранее верифицированной транзакции.
Этот метод выполняет второй шаг в процессе создания платежа - фактическое выполнение платежа.

#### Parameters

##### params

[`ExecutePaymentParams`](../interfaces/ExecutePaymentParams.md)

Параметры выполнения платежа (идентификатор транзакции)

#### Returns

`Promise`\<[`ResponseBase`](../interfaces/ResponseBase.md)\<[`PaymentResponse`](../interfaces/PaymentResponse.md)\>\>

Промис с результатом выполнения платежа

#### Example

```typescript
const executeResult = await paymentsApi.executePayment({
  transaction_id: 'your-transaction-id'
});

if (executeResult.success && executeResult.data?.status_code === StatusCode.PAYMENT_SUCCESS) {
  console.log('Платеж успешно выполнен!');
}
```

***

### getPaymentStatus()

> **getPaymentStatus**(`transactionId`): `Promise`\<[`PaymentResponse`](../interfaces/PaymentResponse.md)\>

Defined in: [api/payments.ts:91](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/payments.ts#L91)

Получает информацию о статусе платежа по идентификатору транзакции.

#### Parameters

##### transactionId

`string`

Идентификатор транзакции

#### Returns

`Promise`\<[`PaymentResponse`](../interfaces/PaymentResponse.md)\>

Промис со статусом платежа

#### Example

```typescript
const paymentStatus = await paymentsApi.getPaymentStatus('your-transaction-id');
console.log(`Статус платежа: ${paymentStatus.status}`);
```
