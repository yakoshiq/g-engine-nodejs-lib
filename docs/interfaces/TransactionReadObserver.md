[**G-Engine API Documentation v0.1.1**](../README.md)

***

[G-Engine API Documentation](../globals.md) / TransactionReadObserver

# Interface: TransactionReadObserver

Defined in: [types/index.ts:186](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L186)

## Properties

### id?

> `optional` **id**: `number`

Defined in: [types/index.ts:187](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L187)

***

### code

> **code**: `string`

Defined in: [types/index.ts:188](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L188)

***

### code\_api?

> `optional` **code\_api**: `string`

Defined in: [types/index.ts:189](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L189)

***

### parameter\_id?

> `optional` **parameter\_id**: `number`

Defined in: [types/index.ts:190](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L190)

***

### store\_id?

> `optional` **store\_id**: `number`

Defined in: [types/index.ts:191](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L191)

***

### date?

> `optional` **date**: `string`

Defined in: [types/index.ts:192](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L192)

***

### issue\_date?

> `optional` **issue\_date**: `string`

Defined in: [types/index.ts:193](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L193)

***

### steam\_login?

> `optional` **steam\_login**: `string`

Defined in: [types/index.ts:194](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L194)

***

### amount?

> `optional` **amount**: `number`

Defined in: [types/index.ts:195](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L195)

***

### amount\_usd?

> `optional` **amount\_usd**: `number`

Defined in: [types/index.ts:196](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L196)

***

### cashback?

> `optional` **cashback**: `number`

Defined in: [types/index.ts:197](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L197)

***

### status?

> `optional` **status**: `string`

Defined in: [types/index.ts:198](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L198)

***

### status\_code?

> `optional` **status\_code**: [`StatusCode`](../enumerations/StatusCode.md)

Defined in: [types/index.ts:199](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L199)

***

### gift\_code?

> `optional` **gift\_code**: `string`

Defined in: [types/index.ts:200](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L200)

***

### parameter?

> `optional` **parameter**: [`ParameterDTO`](ParameterDTO.md)

Defined in: [types/index.ts:201](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L201)

***

### store?

> `optional` **store**: [`StoreDTO`](StoreDTO.md)

Defined in: [types/index.ts:202](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L202)

***

### service?

> `optional` **service**: [`ServiceDTO`](ServiceDTO.md)

Defined in: [types/index.ts:203](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L203)

***

### children?

> `optional` **children**: [`TransactionReadObserver`](TransactionReadObserver.md)[]

Defined in: [types/index.ts:204](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L204)

***

### user?

> `optional` **user**: [`UserReadTransactionObserver`](UserReadTransactionObserver.md)

Defined in: [types/index.ts:205](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/types/index.ts#L205)
