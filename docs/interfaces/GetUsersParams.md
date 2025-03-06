[**G-Engine API Documentation v0.1.1**](../README.md)

***

[G-Engine API Documentation](../globals.md) / GetUsersParams

# Interface: GetUsersParams

Defined in: [api/users.ts:23](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/users.ts#L23)

Параметры для получения списка пользователей.

 GetUsersParams

## Properties

### limit?

> `optional` **limit**: `number`

Defined in: [api/users.ts:24](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/users.ts#L24)

Максимальное количество пользователей в ответе

***

### offset?

> `optional` **offset**: `number`

Defined in: [api/users.ts:25](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/users.ts#L25)

Смещение для пагинации

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: [api/users.ts:26](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/users.ts#L26)

Поле для сортировки

***

### sort\_order?

> `optional` **sort\_order**: `string`

Defined in: [api/users.ts:27](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/users.ts#L27)

Порядок сортировки ('asc' или 'desc')

***

### start\_date?

> `optional` **start\_date**: `string`

Defined in: [api/users.ts:28](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/users.ts#L28)

Начальная дата для фильтрации (в формате YYYY-MM-DD)

***

### end\_date?

> `optional` **end\_date**: `string`

Defined in: [api/users.ts:29](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/users.ts#L29)

Конечная дата для фильтрации (в формате YYYY-MM-DD)

***

### search\_field?

> `optional` **search\_field**: `string`

Defined in: [api/users.ts:30](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/users.ts#L30)

Поле для поиска

***

### search\_value?

> `optional` **search\_value**: `string`

Defined in: [api/users.ts:31](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/users.ts#L31)

Значение для поиска

***

### role\_name?

> `optional` **role\_name**: [`UserRole`](../enumerations/UserRole.md)

Defined in: [api/users.ts:32](https://github.com/yakoshiq/g-engine-nodejs-lib/blob/63328d85b5989256f3bd1f6ff7feb24d5e5a10a6/src/api/users.ts#L32)

Роль пользователя для фильтрации
